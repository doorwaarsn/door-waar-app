import { useComments } from "../../contexts/Comment/Comment.provider";
import { API_URL } from "../../env";
import LineChartBalance from "./LineChartBalance";

const Balance = () => {
  const { comments } = useComments();
  console.log(comments);

  return (
    <div className="flex-1 h-[444px] rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col justify-between  items-center py-5">
      <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2 px-5">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          Commentaires
        </h6>
      </div>
      {comments.map((item: any) => (
        <div className="w-full flex items-center gap-2 hover:bg-[#eff4fa] px-5 py-2">
          <div className=" rounded-full overflow-hidden">
            <img
              src={`${API_URL}/resources/${item.worker?.avatar[0].image}`}
              alt=""
              className=" w-[50px] h-[50px] object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-start gap-4 w-[90%]">
            <h5 className="text-[13px] font-normal leading-[0.67] text-center text-[#44464b]  flex gap-3 w-full justify-between items-center">
              {item.client.fullName}{" "}
              <span className="text-[10px]">{item.client.phoneNumber}</span>
            </h5>
            <p className="text-[12px] font-normal leading-[0.67] text-center text-[#8f9bb3]  flex items-center gap-3 justify-between w-full">
              <TruncatedText text={item.comment} maxLength={20} />
              <span className="text-[10px]">{formatDate(item.createdAt)}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const TruncatedText = ({ text, maxLength }: any) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <p>{truncatedText}</p>;
};
export default Balance;
