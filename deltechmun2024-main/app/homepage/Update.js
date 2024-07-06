const ImportantUpdate = () => {
  const updates = [
    {
      id: "update-1",
      content: "New dates of the conference are 20-21 April.",
    },
    {
      id: "update-2",
      content:
        "Round 1 of Registration has resumed.",
    },
    {
      id: "update-3",
      content:
        "Delegates are requested to register again, and will be allotted portfolios soon.",
    },
  ];

  return (
    <>
      <div className="h-80 bg-[#040b23] bg mt-20 mb-8 py-5 text-gray-300 mx-auto overflow-y-scroll no-scrollbar max-w-4xl rounded-3xl font-merriweather">
        <h1 className="text-center text-[36px] font-bold tracking-wider mb-4">
          Important Updates
        </h1>
        <hr className="border-gray-400 mx-6" />
        {updates.map((update, index) => (
          <div key={index}>
            <p className="mt-4 mx-auto text-center text-[14px] text-gray-400 tracking-wider max-w-[475px]">
              {update.content}
            </p>
            <div
              className={`h-[2px] w-20 mx-auto mt-2 bg-white ${
                index == updates.length - 1 ? "hidden" : "block"
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImportantUpdate;
