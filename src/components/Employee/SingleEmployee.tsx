import React, { useEffect, useState } from "react";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import WhatshAp from "../../assets/icons/whatshap.svg";
import Be from "../../assets/icons/be.svg";
import { API_URL } from "../../env";
import { PiSealCheckFill } from "react-icons/pi";
import { FaTrash } from "react-icons/fa6";
import { PiChecksBold } from "react-icons/pi";
import { useUsers } from "../../contexts/users/users.provider";
import { toast } from "react-toastify";
import { WorkersGallery } from "./WorkersGallery";
import { IoIosClose, IoLogoWhatsapp } from "react-icons/io";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { format } from "date-fns";
import Comment from "./Comment";

const SingleEmployee = ({
  workerDetails,
  setViewsChange,
  setWorkerDetails,
}: any) => {
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

  console.log(workerDetails);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ajoutez une condition ici pour vérifier que vous ne déclenchez pas inutilement un setState
        if (workerDetails && workersPhone) {
          if (!workerDetails.recommend && workersPhone) {
            await recommendedWorker(workersPhone);
            toast.success(
              `Le compte de ${workerDetails.fullName} est certifié`
            );
          } else if (workerDetails.recommend && workersPhone) {
            await recommendedWorker(workersPhone);
            toast.error(
              `La certification du compte de ${workerDetails.fullName} est désactivée`
            );
          }
          // Mettez à jour les états sans boucler
          setViewsChange("details");
          setWorkerDetails(workerDetails);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (workersPhone) {
      fetchData(); // Appelez la fonction d'async dans useEffect
    }

    // Ne déclenchez pas ces appels sans conditions, vérifiez d'abord si workerDetails.id existe
    if (workerDetails.id) {
      getWorkerCallHistory(workerDetails.id);
      getReviewsWorker(workerDetails.id);
    }

    // Ajoutez le tableau de dépendances pour éviter une boucle infinie
  }, [workersPhone, workerDetails]); // Ajoutez uniquement les dépendances nécessaires

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const openSlider = (image: any) => {
    setIsSliderOpen(true);
    setImage(image);
  };

  return (
    <div className=" w-full flex gap-3 h-screen overflow-auto ">
      <div className="w-2/3 flex  gap-3 flex-col">
        <div className="w-full flex  gap-4">
          <div className="flex-1 flex flex-col gap-5  h-[300px] bg-white rounded-md p-4 justify-between shadow-sm">
            <div className="w-full flex items-center gap-2 border-b border-[#eff4fa] pb-5 ">
              <img
                src={`${API_URL}/resources/${workerDetails.avatar}`}
                className="w-[70px] h-[70px] rounded-full object-cover"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p className="text-[15px] font-semibold leading-[1.07] text-left text-[#222b45]">
                  {workerDetails.fullName}
                </p>
                <p className="text-[13px] font-normal leading-[1.23] text-left text-[#8f9bb3]">
                  {workerDetails.profession.name}
                </p>
                <p className="text-[12px] font-normal leading-[1.23] text-left text-[#8f9bb3]">
                  {workerDetails.address}
                </p>
                <p className="flex items-center gap-1">
                  <img src={Facebook} alt="" className="w-[20px] h-[20px]" />
                  <img src={Twitter} alt="" className="w-[20px] h-[20px]" />
                  <img src={WhatshAp} alt="" className="w-[20px] h-[20px]" />
                  <img src={Be} alt="" className="w-[20px] h-[20px]" />
                </p>
              </div>
            </div>
            <p className="text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
              {workerDetails.description}
            </p>

            <div className="w-full flex justify-start items-center gap-4 self-end">
              <button
                onClick={() => setWorkersPhone(workerDetails.phoneNumber)}
                className={`w-[120px] h-[26px]  mb-0 gap-1 flex justify-center items-center p-[5px]   rounded-[4px]  ${
                  workerDetails.recommend ? "bg-[#14ABE3]" : "bg-yellow-500"
                } text-[13px] font-normal leading-[1.23] text-left text-white`}
              >
                <PiSealCheckFill size={14} />
                {workerDetails.recommend ? "Certifier" : "Non Certifier"}
              </button>
              <button className="w-[87px] h-[26px]  mb-0 gap-1 flex justify-center items-center p-[5px] pr-[14px] pl-[10px] rounded-[4px] bg-green-600 text-[13px] font-normal leading-[1.23] text-left text-white">
                <PiChecksBold size={14} />
                Actif
              </button>
              <button className="w-[100px] h-[26px]  mb-0 gap-1 flex justify-center items-center p-[5px] pr-[14px] pl-[10px] rounded-[4px] bg-red-600 text-[13px] font-normal leading-[1.23] text-left text-white">
                <FaTrash size={14} />
                Supprimer
              </button>
            </div>
          </div>
          <div className="flex-1  h-[300px] bg-white rounded-md shadow-sm flex flex-col gap-4 p-2">
            <p className="text-[16px] font-semibold leading-[1.23] text-left text-[#222b45] border-b w-full py-3">
              Complément de dossiers
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2">
              <div>
                {workerDetails?.cni[0]?.image && (
                  <img
                    className="h-[220px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
                    src={`${API_URL}/resources/${workerDetails?.cni[0]?.image}`}
                    alt=""
                    onClick={() => openSlider(workerDetails?.cni[0]?.image)}
                  />
                )}

                {isSliderOpen && image === workerDetails?.cni[0]?.image && (
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
                          className="max-w-full max-h-full"
                          src={`${API_URL}/resources/${workerDetails?.cni[0]?.image}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {workerDetails?.certificate[0]?.image && (
                  <img
                    className="h-[220px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
                    src={`${API_URL}/resources/${workerDetails?.certificate[0]?.image}`}
                    alt=""
                    onClick={() =>
                      openSlider(workerDetails?.certificate[0]?.image)
                    }
                  />
                )}
                {isSliderOpen &&
                  image === workerDetails?.certificate[0]?.image && (
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
                            className="max-w-full max-h-full"
                            src={`${API_URL}/resources/${workerDetails?.certificate[0]?.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[585px] bg-white shadow-sm p-2 flex flex-col gap-4">
          <p className="text-[16px] font-semibold leading-[1.23] text-left text-[#222b45] border-b w-full py-3">
            Réalisations
          </p>
          <WorkersGallery data={workerDetails.illustrator} />
        </div>
      </div>
      <div className="w-1/3 h-[900px] flex flex-col gap-4">
        <div className="w-full h-[450px] bg-white shadow-sm flex flex-col gap-4 p-3 overflow-y-auto">
          <p className="text-[16px] font-semibold leading-[1.23] text-left text-[#222b45] border-b w-full py-3">
            Commentaires
          </p>
          {reviewWorker.map((item: any) => (
            <Comment item={item} />
          ))}
        </div>

        <div className="w-full h-[450px] bg-white shadow-sm flex flex-col gap-4 p-3 overflow-y-auto">
          <p className="text-[16px] font-semibold leading-[1.23] text-left text-[#222b45] border-b w-full py-3">
            Historique d'appels
          </p>
          {callHistory.map((item: any) => (
            <div className="w-full h-[50px] border rounded-md flex justify-between items-start p-1 px-2 ">
              <div className="w-[70%] h-full flex items-center gap-2">
                {item?.callType === "CALL" ? (
                  <HiPhoneArrowDownLeft size={32} className=" text-[#14ABE3]" />
                ) : (
                  <IoLogoWhatsapp size={32} className=" text-green-600" />
                )}

                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-[12px] font-semibold leading-[1.23] text-left text-[#222b45]">
                    {item?.userApp?.fullName}
                  </h4>
                  <h4 className="text-[10px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
                    {item?.userApp?.phoneNumber}
                  </h4>
                </div>
              </div>
              <p className="text-[10px] font-normal leading-[1.33] text-left text-[#8f9bb3] mt-2">
                {format(new Date(item?.createdAt), "dd/MM/yyyy - HH:mm")}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleEmployee;
