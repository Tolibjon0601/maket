import { TbPhone, TbUser, TbLock } from "react-icons/tb";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import { useState, useContext, FormEvent } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { AuthContext } from './../authcontext/authcontext';
import { useNavigate } from "react-router";

interface LoginFormData {
  phoneNumber: string;
  name: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const submitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (!phoneNumber || !name || !password || !confirmPassword) {
      toast.error("Maydonlar hammasi to'ldirilishi kerak!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Parol va  tasdiqlash paroli bir-biriga mos emas");
      return;
    }

    fetch('https://fakestoreapi.com/auth/login', {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Login qilishda xatolik");
        }
        return res.json();
      })
      .then((json) => {
        toast.success("Tizimga muvaffaqiyatli kirildi!");
        login(json.token);
        navigate("/auth");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-[110px] bg-[#FCA311]">
      <div className="bg-[white] rounded-b-[25px] shadow-lg p-16 w-full max-w-[478px] relative">
        <span className="block w-full bg-[#FDB541] top-[-91px] outline-none left-0 h-[91px] absolute rounded-t-[25px]"></span>
        <div className="absolute top-0 left-0 w-full">
          <img src="./loginImg.svg" alt="Login Illustration" />
        </div>

        <form onSubmit={submitHandler} className="relative mt-8">
          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center">
              <TbPhone size={24} className="mr-2" />
              <label htmlFor="phone" className="text-xs font-bold mb-2">
                НОМЕР ТЕЛЕФОНА
              </label>
            </div>
            <div className="relative mb-6">
              <FiCheck size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
              <InputMask
                mask="+999-99-999-99-99"
                placeholder="+998 99 880 80-80"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    className="block w-full border-b focus:outline-none text-sm px-2 py-1"
                    {...inputProps}
                  />
                )}
              </InputMask>
            </div>
          </div>

          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center mb-4">
              <TbUser size={24} className="mr-2" />
              <label htmlFor="name" className="text-xs">
                ИМЯ
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                id="name"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full border-b border-gray-300 focus:border-orange-600 focus:outline-none text-sm px-2 py-1"
              />
            </div>
          </div>

          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center mb-4">
              <TbLock size={24} className="text-gray-500 mr-2" />
              <label htmlFor="password" className="text-xs text-gray-500">
                ПАРОЛЬ
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border-b border-gray-300 focus:border-orange-600 focus:outline-none text-sm px-2 py-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className="text-textcolor hover:text-secondary">
            <div className="flex items-center mb-4">
              <TbLock size={24} className="text-red-500 mr-2" />
              <label htmlFor="confirmPassword" className="text-xs text-red-500 font-bold">
                ПОДТВЕРЖДЕНИЕ ПАРОЛЯ
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full border-b border-gray-300 focus:border-orange-600 focus:outline-none text-sm px-2 py-1"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-[154px] bg-secondary font-medium text-center rounded-[5px] mt-[30px]"
          >
            Далее
          </button>

          <div className="mt-4 text-center text-sm text-gray-500">
            Уже есть аккаунт?{" "}
            <a href="#" className="text-secondary font-semibold">
              Войти
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
