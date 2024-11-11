import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";

import OTPInput from "react-otp-input";
import { useNavigate } from "react-router";
const AuthPage = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);

    if (otpValue.length === 6) {
      navigate("/");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen pt-[110px] bg-[#FCA311]">
      <div className="bg-[white] rounded-b-[25px] shadow-lg p-16 w-full max-w-[478px] relative">
        <div>
          <span className="block w-full bg-[#FDB541] top-[-91px] outline-none left-0 h-[91px] absolute rounded-t-[25px]"></span>
        </div>
        <div className="absolute top-0 left-0 w-full">
          <img src="./authImg.svg" alt="" />
        </div>
        <div
          onClick={() => navigate("/login")}
          className="flex cursor-pointer items-center gap-2 text-textcolor relative mt-7 mb-6"
        >
          <BiArrowBack size={22} />
          <h1 className="font-medium text-base">Вернуться</h1>
        </div>
        <div>
          <h1 className="font-bold text-textcolor mb-[7px]">
            Введите код из СМС
          </h1>
          <p className="font-normal text-sm text-textcolor mb-[7px] ">
            Не получили код?
            <span className="font-bold text-secondary pl-3">
              Отправить повторно
            </span>
          </p>
          <p className="font-normal text-sm text-textcolor mb-[35px]">
            Получить повторный код можно через 1:48
          </p>
          <OTPInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={6}
            renderSeparator=""
            renderInput={(props) => (
              <input
                {...props}
                className="otp-input mr-2"
                style={{
                  color: "#999",
                  border: "none",
                  borderBottom: "2px solid #999",
                  textAlign: "center",
                  fontSize: "48px",
                  fontWeight: "500",
                  width: "40px",
                }}
              />
            )}
          />
        </div>

        <button className="font-medium text-sm  py-3 pl-[98px] pr-[108px] bg-secondary mt-8 rounded-[5px] mx-auto flex">
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
