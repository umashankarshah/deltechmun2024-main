import Heading from "../components/heading/Heading"

const Venue = () => {
  return (
    <div className="flex flex-col md:flex-row">
        <div className="w-full h-60 md:h-96">
          <iframe
            title="Map_dtu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.997443658061!2d77.11617251501175!3d28.749493282371805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1668174548995!5m2!1sen!2sin"
            style={{ border: "0", height: "inherit", width: "inherit" }}
            allowfullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" text-slate-900 p-10 bg-white w-full ">
        <Heading background="Venue" main="Venue" />
          <p className="text-md text-center lg:text-xl leading-relaxed py-10 font-serif">
            BR AUDITORIUM, Delhi Technological University (formerly DCE), Bawana
            Rd, Shahbad Daulatpur Village, Rohini, New Delhi, Delhi 110042
          </p>
        </div>
      </div>
  )
}

export default Venue