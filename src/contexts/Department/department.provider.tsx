import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchRequest, getRequest, postRequest } from "../../common/request";
import * as yup from "yup";
import { Department, createDepartment } from "./department.model";

interface DepartmentContextType {
  departments: Department[];
  loading: boolean;
  profession: any;
  error: string | null;
  createDepartments: (
    department: Omit<createDepartment, "id">
  ) => Promise<void>;
  getProfessionById: (id: any) => Promise<void>;
}

const DepartmentContext = createContext<DepartmentContextType | undefined>(
  undefined
);

const DepartmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [profession, setProfession] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetchRequest("professions");
        const data = await response.data;
        setDepartments(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const getProfessionById = async (id: any) => {
    setLoading(true);
    try {
      const response = await getRequest("professions", id);
      setProfession(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const createDepartments = async (
    department: Omit<createDepartment, "id">
  ) => {
    try {
      const response = await postRequest("admin/depart/create", department);

      setDepartments((prevDeparts) => [...prevDeparts, response]);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setError(error.message);
      } else {
        setError("Failed to create user");
      }
    }
  };

  return (
    <DepartmentContext.Provider
      value={{
        departments,
        loading,
        error,
        createDepartments,
        getProfessionById,
        profession,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};

const useDepartments = (): DepartmentContextType => {
  const context = useContext(DepartmentContext);
  if (!context) {
    throw new Error("useDepartments must be used within a UserProvider");
  }
  return context;
};

export { DepartmentProvider, useDepartments };
