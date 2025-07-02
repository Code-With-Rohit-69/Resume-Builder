import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance.js";
import { API_PATHS } from "../../utils/apiPaths.js";
import DashboardLayout from "../../components/layouts/DashboardLayout.jsx";
import { LuCirclePlus } from "react-icons/lu";

import moment from "moment";
import ResumeSummaryCard from "../../components/Cards/ResumeSummaryCard.jsx";
import Modal from "../../components/Modal.jsx";
import CreateResumeForm from "./CreateResumeForm.jsx";

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModel, setOpenCreateModel] = useState(false);
  const [allResumes, setAllResumes] = useState(null);

  const fetchAllResumes = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      setAllResumes(response.data);
    } catch (error) {
      console.log("Error in fetching resumes ", error);
    }
  };

  useEffect(() => {
    fetchAllResumes();
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
        <div
          className="h-[300px] flex flex-col gap-5 items-center justify-center bg-white rounded-lg border border-purple-100 hover:border-purple-300 cursor-pointer"
          onClick={() => setOpenCreateModel(true)}
        >
          <div className="w-12 h-12  flex items-center justify-center bg-purple-200/60 rounded-2xl">
            <LuCirclePlus className="text-xl text-purple-500" />
          </div>
          <h3 className="font-medium text-gray-800">Add new Resume</h3>
        </div>

        {allResumes?.map((resume) => (
          <ResumeSummaryCard
            key={resume?._id}
            imgUrl={resume?.thumbnailLink || resume?.profileInfo?.profilePreviewUrl ||
    null}
            title={resume.title}
            lastUpdated={
              resume?.updatedAt
                ? moment(resume.updatedAt).format("Do MMM YYYY")
                : ""
            }
            onSelect={() => navigate(`/resume/${resume._id}`)}
          />
        ))}
      </div>

      <Modal
        isOpen={openCreateModel}
        onClose={() => {
          setOpenCreateModel(false);
        }}
        hideHeader
      >
        <div className="">
          <CreateResumeForm />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
