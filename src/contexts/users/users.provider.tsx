import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CreateUser, User } from "./users.models";
import {
  fetchRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../common/request";
import * as yup from "yup";

interface UserContextType {
  users: User[];
  customers: User[];
  setUserId: any;
  vacations: any;
  callHistory: any;
  reviewWorker: any;
  loading: boolean;
  error: string | null;
  createUser: (user: Omit<CreateUser, "id">) => Promise<void>;
  editUser: (user: any, id: any) => Promise<void>;
  recommendedWorker: (phoneNumber: any) => Promise<void>;
  getWorkerCallHistory: (id: any) => Promise<void>;
  getReviewsWorker: (id: any) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [customers, setCustomer] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState(null);
  const [callHistory, setCallHistory] = useState([]);
  const [reviewWorker, setReviewWorker] = useState([]);

  const [vacations, setVacations] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchRequest("workers");

        // Assurez-vous que response.data est bien un tableau
        if (Array.isArray(response.data)) {
          const sortedData = response.data.sort(
            (a: User, b: User) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setUsers(sortedData);
        } else {
          throw new Error("Les données reçues ne sont pas au format attendu.");
        }
      } catch (error: any) {
        setError(error.message || "Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };

    const fetchCustomers = async () => {
      try {
        const response = await fetchRequest("users");

        // Assurez-vous que response.data est bien un tableau
        if (Array.isArray(response.data)) {
          // Filtrer les utilisateurs avec le rôle "CUSTOMER"
          const customers = response.data.filter(
            (user: User) => user.role === "CUSTOMER"
          );

          // Trier les customers par date de création (du plus récent au plus ancien)
          const sortedData = customers.sort(
            (a: User, b: User) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

          // Mettre à jour l'état avec les customers triés
          setCustomer(sortedData);
        } else {
          throw new Error("Les données reçues ne sont pas au format attendu.");
        }
      } catch (error: any) {
        setError(error.message || "Une erreur est survenue");
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
    fetchUsers();
  }, []);

  const recommendedWorker = async (phoneNumber: string) => {
    try {
      await getRequest("workers/isRecommendWorker", phoneNumber);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getReviewsWorker = async (id: any) => {
    try {
      const response = await getRequest("reviews-worker", id);
      setReviewWorker(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getWorkerCallHistory = async (id: any) => {
    try {
      const response = await getRequest(`callHistory/${id}`, "worker");
      setCallHistory(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserVacation = async (id: string) => {
    try {
      const response = await getRequest("admin/users/solde", id);
      const data = await response.data;
      setVacations(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserVacation(userId);
    }
  }, [userId]);

  const createUser = async (user: Omit<CreateUser, "id">) => {
    try {
      await userSchema.validate(user);

      const response = await postRequest("admin/users/create", user);

      // setUsers((prevUsers) => [...prevUsers, response]);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setError(error.message);
      } else {
        setError("Failed to create user");
      }
    }
  };

  const editUser = async (user: any, id: any) => {
    try {
      await putRequest(`admin/users/update/${id}`, user);
    } catch (error: any) {
      if (error) {
        setError(error);
      } else {
        setError("Failed to edite user");
      }
    }
  };

  const userSchema = yup.object().shape({
    referenceID: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Password confirmation is required"),
    gender: yup.string().required(),
    jobId: yup.string().required(),
    type: yup.string().required(),
    role: yup.string().required(),
    street: yup.string().required(),
    // departId: yup.string().required(),
    city: yup.string().required(),
    phoneNumber: yup.string().required(),
    country: yup.string().required(),
  });

  return (
    <UserContext.Provider
      value={{
        setUserId,
        vacations,
        callHistory,
        getReviewsWorker,
        reviewWorker,
        users,
        loading,
        error,
        createUser,
        recommendedWorker,
        getWorkerCallHistory,
        editUser,
        customers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUsers = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUsers };
