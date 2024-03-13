import { Footer } from "../Components/Partials/Footer"
import { Header } from "../Components/Partials/Header"
import BookCover from "/assets/Images/BookCover.jpg"

export const SpecificPage = () => {
  return (
    <>
      <Header></Header>
      <main className=" mt-[96px] px-0 m-[16px] ">
        <img className="w-screen" src={BookCover} alt="" />
        <div className="p-0">
            <p className="text-dark font-bold text-[32px] w-full py-1 pt-4 ">
            Lord of the Rings - The Fellowship of the Ring
            {/* ${book.title} */}
            </p>
          <hr class="w-[84px] h-1 my-2 bg-dark border-0 rounded m-0 "></hr>
        </div>
        <div className="grid grid-cols-2 gap-[16px] justify-between py-4">
            <ul className="list-none -pb-6 font-bold text-dark text-[22px] w-fit p-0">
                <li className="pb-6">
                Author
                </li>
                <li className="pb-6">
                Publisher
                </li>
                <li className="pb-6">
                Publish date
                </li>
                <li className="pb-6">
                ISBN-13
                </li>
            </ul>
            <ul className="list-none -text-primary text-[22px] w-full p-0 text-primary">
              <li className="pb-6">
                J.R.R Tolkien
                {/* ${book.author} */}
              </li>
              <li className="pb-6">
                Harper Collins
                {/* ${book.publisher} */}
              </li>
              <li className="pb-6">
                2001.02.15.
                {/* ${publish.date} */}
                </li>
              <li className="pb-6">
                978-0007136599
                {/* ${book.isbn} */}
              </li>
            </ul>
        </div>
        <div className="-mt-[20px]">
        <p className="text-[16] text-dark text- ">
            The Fellowship of the Ring consists of nine
            walkers who set out on the quest to destroy the
            One Ring, in opposition to the nine Black Riders:
            Frodo Baggins, Sam Gamgee, Merry Brandybuck and 
            Pippin Took; Gandalf; the Men Aragorn and Boromir, 
            son of the Steward of Gondor; the Elf Legolas; 
            and the Dwarf Gimli.
            {/* ${book.description} */}
        </p>
        </div>
        <div className="grid grid-cols-2 gap-[32px] justify-between m-0 py-4 ">
            <ul className="list-none font-bold text-dark text-[22px] w-fit m-0 p-0">
              <li>
                Uploaded by
              </li>
            </ul>
            <ul className="list-none text-primary text-[22px] m-0 p-0">
              <li>
                WetWilly
                {/* ${user.name} */}
              </li>
            </ul>
        </div>
        <div className="flex pb-[104px] gap[32px] justify-between">
        <div className="items-center">
            <button className="h-[48px]  rounded-lg text-primary font-bold text-[22px] px-[16px] py[8px] underline underline-offset-8">Go Back</button>
        </div>
        <div className="items-center">
            <button className="h-[48px] bg-primary rounded-lg text-center text-light font-bold text-[22px] px-[16px] py[8px]">Reserve & Contact </button>
        </div>
        </div>
      </main>

    <Footer></Footer>
    </>
  )
}  