import React from "react";
import ExamRoutineRow from "./ExamRoutineRow";
interface RoutineInfo {
  routine: any;
}
const ExamRoutine = ({ routine }: RoutineInfo) => {
  return (
    <div className="my-10">
      {routine[0]?.examRoutine?.length !== 0 ? (
        <div className="card lg:w-3/4 w-full mx-auto bg-base-100 border  shadow-lg">
          <div className="p-5 ">
            <p className="text-2xl font-medium  uppercase text-center">
              Realwai public Collage,Chittagong
            </p>
            <p className="text-lg  font-sans text-gray-800 text-center">
              {" "}
              Education Board
            </p>
            <p className="text-lg font-sans text-gray-800 text-center">
              Bachelor of Science (BSC)
            </p>
            <div>
              <p className="text-xl font-sans text-gray-800 text-center">
                {routine[0]?.examRoutine[0]?.examName} Schedule
              </p>
            </div>

            <div className=" flex justify-between mt-10 text-lg">
              <div>
                <span>Session:</span>
                <span className="px-3">2021-2022</span>
              </div>
              <div>
                <span>Date:</span>
                <span className="px-3">04/22/2022</span>
              </div>
            </div>

            <p className="mt-2">
              এতদ্বারা সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে, ২০২০ সালের
              এক্সাম নেম পরীক্ষা নিম্নোক্ত সময়সূচি অনুযায়ী অনুষ্টিত হবে। বিশেষ
              প্রয়োজনে কলেজ কর্তৃপক্ষ এ সময়সূচি পরিবর্তন করতে পারবেন।
            </p>

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                        Time
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Subject Code
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {routine[0]?.examRoutine[0]?.routines?.map(
                      (routine: any) => (
                        <ExamRoutineRow key={routine} routine={routine} />
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between my-5">
                <div></div>
                <div className="text-center">
                  <p>প্রফেসর মামুন ইসলাম </p>
                  <p>আহবায়ক </p>
                  <p>আন্তঃ শিক্ষা বোর্ড পরীক্ষা নিয়ন্ত্রণ কমেটি</p>
                  <p>ও পরিক্ষা নিয়ন্ত্রক শিক্ষা বোড</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-[#2374e1] h-[25px] "></div> */}
        </div>
      ) : (
        <div className="card lg:w-9/12 w-full mx-auto bg-base-100 border pb-5">
          <div className="flex justify-center ">
            <img className="w-[350px]" src="/assets/picture/sorry.gif" alt="" />
          </div>
          <div className="text-center">
            <p className="  font-medium text-xl">Sorry,</p>
            <p className="text-gray-800 mt-1">
              {" "}
              Collage Authority Exam Routine Dont Published.
            </p>
            <p>Thank You.</p>
            <button
              // onClick={() => navigate("/onlineAdmission")}
              className="bg-[#2374e1] text-white px-4 py-1 rounded-lg my-2 uppercase font-semibold"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamRoutine;
