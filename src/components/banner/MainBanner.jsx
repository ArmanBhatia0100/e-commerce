import React from "react";

function MainBanner() {
  return (
    <section className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
      {/* Banner Image */}

      <div className="w-full h-full">
        {/* Desktop banner */}
        <img
          src="/banner_med_ro_lg_screen.png"
          alt="Banner"
          className="hidden md:block w-full h-[400px] object-fill"
        />

        {/* Mobile banner */}
        <img
          src="/public/banner_small_screen.png"
          alt="Banner"
          className="md:hidden block w-full h-[200px] object-center"
        />
      </div>
    </section>
  );
}

export default MainBanner;
