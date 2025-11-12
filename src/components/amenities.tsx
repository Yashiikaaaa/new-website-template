export default function Amenities() {
  const amenities = [
    { 
      name: "Lush Greenery", 
      icon: '/lush-greenery.svg',
      colored: false 
    },
    { 
      name: "CCTV Surveillance", 
      icon: '/cctv.svg',
      colored: true 
    },
    { 
      name: "Solar Street Lights", 
      icon:'/solar.svg',
      colored: false 
    },
    { 
      name: "24 x 7 Security", 
      icon:'/24x7.svg',
      colored: true 
    },
    { 
      name: "Open Spaces", 
      icon:'/open-spaces.svg',
      colored: true 
    },
    { 
      name: "Swimming Pools", 
      icon: '/pool.svg',
      colored: false 
    },
    { 
      name: "Luxury Clubhouse", 
      icon: '/clubhouse.svg',
      colored: true 
    },
    { 
      name: "Outdoor Courts", 
      icon:'/court.svg',
      colored: false 
    },
  ]

  return (
    <section id="amenities" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-Urbanist">
            Amenities & Facilities
          </h2>
          <p className="text-[#433F3E] text-[14px] md:text-lg font-medium font-Urbanist max-w-3xl">
            It offers its residents access to an exclusive array of recreational and sporting facilities that could rival any resort. 
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[46px]">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`relative p-4 md:px-6 md:py-5 md:max-w-[285px] rounded-[4px] border group cursor-pointer ${
                amenity.colored
                  ? "bg-primary text-white border-primary hover:bg-[#9a1751]"
                  : "bg-[#F2F2F2] text-[#221628] border-primary hover:border-[#9a1751]"
              }`}
            >
              <div className="flex flex-row items-center justify-between h-full">
                <h3 className={`text-lg md:text-xl lg:text-[28px] font-semibold font-Urbanist leading-[119%] ${
                  amenity.colored ? "text-white" : "text-[#221628]"
                }`}>
                  {amenity.name}
                </h3>
                {/* <div className={`ml-auto ${amenity.colored ? "text-white" : "text-primary"}`}>
                  {amenity.icon}
                </div> */}
                <img 
                  src={amenity.icon} 
                  alt={amenity.name} 
                  className="w-10 h-10 md:w-12 md:h-12  object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}