import React, { useEffect, useState } from "react";
import { PiSealCheckFill, PiChecksBold } from "react-icons/pi";
import { FaTrash } from "react-icons/fa6";
import { IoIosClose, IoLogoWhatsapp } from "react-icons/io";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { toast } from "react-toastify";
import { format } from "date-fns";

import FacebookIcon from "../../assets/icons/facebook.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import WhatsAppIcon from "../../assets/icons/whatshap.svg";
import BeIcon from "../../assets/icons/be.svg";
import { API_URL } from "../../env";
import { useUsers } from "../../contexts/users/users.provider";
import Comment from "./Comment";
import { WorkersGallery } from "./WorkersGallery";

interface SingleEmployeeProps {
  workerDetails: any;
  setViewMode: (view: string) => void;
  setWorkerDetails: (details: any) => void;
}

const SingleEmployee: React.FC<SingleEmployeeProps> = ({
  workerDetails,
  setViewMode,
  setWorkerDetails,
}) => {
  const {
    recommendedWorker,
    getWorkerCallHistory,
    callHistory,
    getReviewsWorker,
    reviewWorker,
  } = useUsers();

  const [workersPhone, setWorkersPhone] = useState("");
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (workerDetails && workersPhone) {
        try {
          const isRecommended = workerDetails.recommend;
          await recommendedWorker(workersPhone);
          toast.success(
            isRecommended
              ? `La certification du compte de ${workerDetails?.fullName} est désactivée`
              : `Le compte de ${workerDetails?.fullName} est certifié`
          );
          setViewMode("details");
          setWorkerDetails(workerDetails);
        } catch (err) {
          console.error(err);
        }
      }
    };

    if (workersPhone) {
      fetchData();
    }

    if (workerDetails?.id) {
      getWorkerCallHistory(workerDetails.id);
      getReviewsWorker(workerDetails.id);
    }
  }, [workersPhone, workerDetails]);

  const handleCertifyToggle = () => {
    setWorkersPhone(workerDetails.phoneNumber);
  };

  const closeSlider = () => setIsSliderOpen(false);

  const openSlider = (image: string) => {
    setIsSliderOpen(true);
    setImage(image);
  };

  return (
    <div className="w-full flex gap-3 h-screen overflow-auto">
      <div className="w-2/3 flex flex-col gap-3">
        <div className="w-full flex gap-4">
          <div className="flex-1 flex flex-col gap-5 bg-white rounded-md p-4 shadow-sm justify-between">
            <div className="w-full flex items-center gap-2 border-b pb-5">
              <img
                src={`${API_URL}/resources/${workerDetails?.avatar}`}
                className="w-[70px] h-[70px] rounded-full object-cover"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p className="text-[15px] font-semibold text-[#222b45]">
                  {workerDetails?.fullName}
                </p>
                <p className="text-[13px] text-[#8f9bb3]">
                  {workerDetails?.profession?.name}
                </p>
                <p className="text-[12px] text-[#8f9bb3]">
                  {workerDetails?.address}
                </p>
                <div className="flex items-center gap-1">
                  <img
                    src={FacebookIcon}
                    alt="Facebook"
                    className="w-[20px] h-[20px]"
                  />
                  <img
                    src={TwitterIcon}
                    alt="Twitter"
                    className="w-[20px] h-[20px]"
                  />
                  <img
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    className="w-[20px] h-[20px]"
                  />
                  <img src={BeIcon} alt="Be" className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
            <p className="text-[12px] text-[#8f9bb3]">
              {workerDetails?.description}
            </p>

            <div className="w-full flex gap-4">
              <button
                onClick={handleCertifyToggle}
                className={`flex text-[13px] items-center gap-1 p-1 rounded-[4px] text-white ${
                  workerDetails.recommend ? "bg-[#14ABE3]" : "bg-yellow-500"
                }`}
              >
                <PiSealCheckFill size={14} />
                {workerDetails.recommend ? "Certifier" : "Non Certifier"}
              </button>
              <button className="flex text-[13px] items-center gap-1 p-1 rounded-[4px] bg-green-600 text-white">
                <PiChecksBold size={14} />
                Actif
              </button>
              <button className="flex text-[13px] items-center gap-1 p-1 rounded-[4px] bg-red-600 text-white">
                <FaTrash size={14} />
                Supprimer
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-md shadow-sm p-2 flex flex-col gap-4">
            <p className="text-[16px] font-semibold text-[#222b45] border-b py-3">
              Complément de dossiers
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {workerDetails?.cni[0]?.image && (
                <img
                  className="h-[220px] w-full rounded-lg object-cover cursor-pointer"
                  src={`${API_URL}/resources/${workerDetails?.cni[0]?.image}`}
                  alt="CNI"
                  onClick={() => openSlider(workerDetails?.cni[0]?.image)}
                />
              )}
              {workerDetails?.certificate[0]?.image && (
                <img
                  className="h-[220px] w-full rounded-lg object-cover cursor-pointer"
                  src={`${API_URL}/resources/${workerDetails?.certificate[0]?.image}`}
                  alt="Certificate"
                  onClick={() =>
                    openSlider(workerDetails?.certificate[0]?.image)
                  }
                />
              )}

              {isSliderOpen && (
                <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="w-[50%] flex items-center justify-center">
                    <button
                      onClick={closeSlider}
                      className="absolute top-5 right-5 text-white"
                    >
                      <IoIosClose size={25} />
                    </button>
                    <div className="relative">
                      <img
                        src={`${API_URL}/resources/${image}`}
                        className="rounded-lg max-h-full"
                        alt="Slider"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm p-2 flex flex-col gap-4 rounded-md h-[850px]">
          <p className="text-[16px] font-semibold text-[#222b45] border-b py-3">
            Réalisations
          </p>
          <WorkersGallery data={workerDetails.illustrator} />
        </div>
      </div>

      <div className="w-1/3 flex flex-col gap-4">
        <div className="bg-white shadow-sm p-3 flex flex-col gap-4 overflow-y-auto rounded-md">
          <p className="text-[16px] font-semibold text-[#222b45] border-b py-3">
            Commentaires
          </p>
          {reviewWorker.map((item: any) => (
            <Comment key={item.id} item={item} />
          ))}
        </div>

        <div className="bg-white shadow-sm p-3 flex flex-col gap-4 overflow-y-auto rounded-md">
          <p className="text-[16px] font-semibold text-[#222b45] border-b py-3">
            Historique d'appels
          </p>
          {callHistory.map((item: any) => (
            <div
              key={item.id}
              className="border rounded-md flex justify-between p-2"
            >
              <div className="flex items-center gap-2">
                {item.callType === "CALL" ? (
                  <HiPhoneArrowDownLeft size={32} className="text-[#14ABE3]" />
                ) : (
                  <IoLogoWhatsapp size={32} className="text-green-600" />
                )}
                <div className="flex flex-col">
                  <h4 className="text-[12px] font-semibold text-[#222b45]">
                    {item?.userApp?.fullName}
                  </h4>
                  <h4 className="text-[10px] text-[#8f9bb3]">
                    {item?.userApp?.phoneNumber}
                  </h4>
                </div>
              </div>
              <p className="text-[10px] text-[#8f9bb3]">
                {format(new Date(item?.createdAt), "dd/MM/yyyy - HH:mm")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleEmployee;
