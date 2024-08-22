import Arrow from "../../assets/icons/arrow-down.svg";

const KpiCard = ({ datas }: any) => {
  return (
    <div className="w-[25%] h-[160px] bg-white rounded-md flex flex-col justify-between  items-start p-3 gap-4 border">
      <p className="text-[13px] font-normal leading-[1.23] text-left text-[#222b45]">
        {datas.title}
      </p>

      <p className="w-full text-[30px] font-bold leading-1.2 flex justify-center text-[#222b45]">
        {datas.account}
      </p>
      <div className="w-full flex justify-between items-end">
        <p className="text-[12px] font-normal leading-[1.23] text-left text-[#8f9bb3]">
          {datas.years}
        </p>
        <p className="text-[10px] font-normal leading-[1.23] text-left text-[#0067b2] flex items-end">
          <img src={Arrow} alt="" className="mb-[1px] w-3 h-4" />
          {datas.porcent}%
        </p>
      </div>
    </div>
  );
};

export default KpiCard;
