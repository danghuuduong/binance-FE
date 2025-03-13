import Button from "../../../common/components/button/Button";

const Register: React.FC = () => {
    return (
        <section className="bg-grayBody">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto" >
               
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:w-[550px] xl:p-0 bg-grayCT">
                    <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                        <h2 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl  text-grayTextCT">
                            Đăng Ký
                        </h2>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 font-medium text-grayTextCT">Tên của bạn</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tên của bạn" />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-grayTextCT">Tài khoản đăng nhập</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập Tài khoản để đăng nhập" />
                            </div>
                            
                            <div>
                                <label  className="block mb-2 font-medium text-grayTextCT">Mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div>
                                <label  className="block mb-2 font-medium text-grayTextCT">Nhập lại mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-grayTextCT">API Key </label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="API Key trong Binance" />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-grayTextCT">API Secret</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="API Secret trong Binance" />
                            </div>

                            <Button text="Đăng Ký Ngay" classCT="bg-yellowCT hover:bg-yellow-200 text-grayInButtonYellow"/>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Tôi đã có tài khoản ! <a href="/login" className="font-medium text-primary-600 text-red-500"> Đăng nhập</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;