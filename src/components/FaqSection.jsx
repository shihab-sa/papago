import girls from "../assets/images/female.png";

function FaqSection() {
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-500 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="flex flex-col-reverse sm:gap-6 md:gap-8 lg:gap-12 md:flex-row md:items-center md:justify-center w-full">
        {/* Mockup Phone Section */}
        <div className="flex justify-center w-full sm:w-3/4 md:w-1/2 lg:w-5/12 xl:w-4/12">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                Papago
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full sm:w-3/4 md:w-1/2 lg:w-5/12 xl:w-4/12">
          <img
            src={girls}
            alt="Female illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
