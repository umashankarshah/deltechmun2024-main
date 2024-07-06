const Campus = () => {
  return (
    <section
      className="text-slate-900 bg-transparent leading-relaxed "
      id="home"
    >
      <div className="md:flex md:flex-row items-center md:h-screen px-5">
        <div>
          <h1 className="text-5xl md:py-10 pt-28 md:text-7xl font-bold">
            DelTech MUN Campus Ambassador Programme
          </h1>
        </div>
        <div className="md:w-3/5  -z-10 w-80 md:py-20">
          <img src="/img/campusStu.jpg"></img>
        </div>
      </div>
      <div className="pt-5 bg-slate-300 rounded-t-3xl px-8" id="aboutus">
        <h2 className="text-3xl pb-5">About the Programme</h2>
        <div className="md:flex md:flex-row items-center justify-between w-full">
          <div className="w-full">
            <h2 className="font-semibold">
              Have you ever wondered how does delegation works at the
              fundamental level?<br></br>
              Do you know how do diplomats at UN leave a lasting impression?
              <br></br>Do you ever wish to be a part of an organisation, be at
              the centre stage organising a MUN?
            </h2>
            <br></br>
            <b>
              Well calm down and become an ambassador!<br></br>
            </b>
            <br></br>
            North India’s No.1 ranked MUN the DelTech Model United Nations
            (DelTech MUN) is looking for Campus Ambassadors who can represent
            DelTech MUN at your respective School/ Institute. As a Campus
            Ambassador the selected students will assist and support DelTech MUN
            & DebSoc, DTU to inspire young minds who can redefine the debating
            and MUNing landscape. Interested students can apply through this
            form.
          </div>

          <div className="md:w-full w-80 px-5 pl-10">
            <img className="" src="/img/aboutcampus.png"></img>
          </div>
        </div>
      </div>

      <div className="pt-5 px-5 md:pr-72" id="Responsibilities">
        <h2 className="text-3xl py-5">Who can Apply? </h2>
        <div className="md:flex md:flex-row items-center w-full">
          <h3>
            A student currently reading in High School/First Year of any
            School/Institute can apply.
          </h3>
        </div>
        <h2 className="text-3xl py-5">Campus Ambassador Role: </h2>
        <div className="md:flex md:flex-row items-center w-full">
          <h3>
            Official ambassador and representative of DelTech in your
            school/institute | Promote the DelTech's vision of Model United
            Nations awareness in your school/institute through participation in
            DelTech MUN and various info sessions | Coordinate the execution of
            activities in your school/institute.
          </h3>
        </div>
        <div>
          <div>
            <br></br>
            <h2 className="text-3xl py-2">
              Being an ambassador comes with benefits:
            </h2>
            <br />• Top 1% Campus ambassadors will be gifted Official DelTech
            MUN Hoodie/Varsity Jacket *<br></br>• Goodies and DelTech kit worth
            2.5k
            <br></br>• Official DelTech MUN Certificate
            <br></br>• DelTech Model United Nations 2024 - Flagship Event (worth
            1.5k)
            <br></br>• Chance to meet the Chief Guest of DelTech MUN 2024.
            <br></br>• Attractive concessions & discounts on events from DelTech
            Team.
            <br></br>• Visit DTU Campus during the flagship event. <br></br>
            <div className="text-sm">
              (*subject to satisfactory,performance as evaluated by the
              Directors of DelTech MUN & DebSoc)
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center w-full py-10 flex">
        <a href="https://forms.gle/H3qJgs1bvbYxGiXV7" target="_blank">
          <div
            className="md:py-3 md:px-4 py-2 px-2.5 w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
            hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff] "
          >
            Start you application
          </div>
        </a>
      </div>
    </section>
  );
};

export default Campus;
