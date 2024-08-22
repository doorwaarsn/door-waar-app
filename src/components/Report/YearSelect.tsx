import ArrowFilter from "../../assets/icons/arrow-choose.svg";

const YearSelect = ({ startYear, endYear, selectedYear, onChange }: any) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <div className="inline-block relative w-20">
      <select
        className="block appearance-none w-full bg-white border border-[#eff4fa] px-4 py-[8px] pr-8 rounded  focus:outline-none focus:shadow-outline text-[10px] font-normal leading-[1.25] text-left text-[#222b45]"
        value={selectedYear}
        onChange={onChange}
      >
        {years.map((year) => (
          <option
            key={year}
            value={year}
            className="block text-[10px] font-normal leading-[1.25] text-left text-[#222b45]"
          >
            {year}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <img src={ArrowFilter} alt="" />
      </div>
    </div>
  );
};

export default YearSelect;
