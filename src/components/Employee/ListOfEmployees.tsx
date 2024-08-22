import { API_URL } from "../../env";

const ListOfEmployees = ({ user }: any) => {
  return (
    <>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <input type="checkbox" />
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <div className="flex items-center gap-2">
          <img
            src={`${API_URL}/resources/${user.avatar}`}
            alt="User"
            className="h-10 w-10 rounded-full border border-blue-gray-50 bg-blue-gray-50/50 p-1 object-cover"
          />
          <div className="flex flex-col">
            <p className="block text-[13px] font-semibold leading-[1.23] text-left text-[#222b45]">
              {user.fullName}
            </p>
            <p className="block text-xs font-normal leading-[1.33] text-left text-[#8f9bb3]">
              {user.email}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {user.profession.name}
        </p>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          <TruncatedText text={user.address} maxLength={20} />
        </p>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {user.phoneNumber}
        </p>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {formatDate(user.createdAt)}
        </p>
      </td>

      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {user.providerType === "INDIVIDUAL" ? "Particulier" : "Entreprise"}
        </p>
      </td>
    </>
  );
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const TruncatedText = ({ text, maxLength }: any) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <p>{truncatedText}</p>;
};

export default ListOfEmployees;
