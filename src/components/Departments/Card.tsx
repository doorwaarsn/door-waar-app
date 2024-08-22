import Pencil from "../../assets/icons/pencil.svg";
import Trash from "../../assets/icons/trash.svg";
import { API_URL } from "../../env";

const Card = ({ datas }: any) => {
  return (
    <div className="w-full sm:w-[320px]  border flex flex-col items-center justify-between gap-2  sm:p-[20px 0px] rounded-[8px] border border-[#eff4fa] bg-white shadow-sm">
      <div className="flex flex-col items-center gap-2 pt-5 w-full">
        <img
          src={`${API_URL}/resources/${datas.iconProfession[0].image}`}
          className="w-[84px] h-[84px] rounded-full border-2 border-[#14ABE3] bg-blue-gray-50/50 p-1 object-cover"
          alt="Profile"
        />
        <h6 className="text-[13px] font-semibold leading-[1.23] text-center text-[#222b45]">
          {datas.head?.firstName} {datas.head?.lastName}
        </h6>
        <p className="text-[12px] font-normal leading-[0.67] text-center text-[#8f9bb3]">
          {datas.name}
        </p>
        <div className="flex justify-center items-center w-full gap-3">
          <button className="w-[20px] h-[20px] p-1 bg-[#14ABE3] rounded-sm">
            <img src={Pencil} alt="Edit" />
          </button>
          <button className="w-[20px] h-[20px] p-1 rounded-sm bg-[#eff4fa]">
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full  sm:mt-0 px-6 py-3 border-t border-[#eff4fa]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[15px] font-semibold leading-[1.07] text-center text-[#222b45]">
            {datas.users?.length}
          </span>
          <span className="text-[12px] font-normal leading-[0.67] text-center text-[#8f9bb3]">
            Ouvriers
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[15px] font-semibold leading-[1.07] text-center text-[#222b45]">
            12
          </span>
          <span className="text-[12px] font-normal leading-[0.67] text-center text-[#8f9bb3]">
            12%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
