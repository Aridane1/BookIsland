import { Footer } from "../Components/Partials/Footer"
import { Header } from "../Components/Partials/Header"
import BookCover from "../assets/Images/BookCover.jpg"

export const SpecificPage = () => {
  return (
    <>
      <Header></Header>
      <main className="px-0 -pb-20 m-[16px]">
        <img className="w-screen" src={BookCover} alt="" />
        <div>
            <p className="text-dark font-bold text-[32px] w-fit pt-2 py-1 ">
            Lord of the Rings - The Fellowship of the Ring
            {/* ${book.title} */}
            </p>
          <hr class="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded m-0 "></hr>
        </div>
        <div className="grid grid-cols-2 gap-[32px] -mt-[20px] justify-between">
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
            <ul className="list-none -text-primary text-[22px]  p-0">
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
        <p className="pb-6 text-[16] text-dark text- ">
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
        <div className="grid grid-cols-2 gap-[32px] justify-between m-0 p-4">
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
        <div className="pb-16 flex">
        <div className="justify-center items-center">
            <button className="w-10/12 h-[48px] bg-primary rounded-lg text-light font-bold text-[22px] pr-[20px]">Add a book </button>
        </div>
        <div className="justify-center items-center">
            <button className="w-10/12 h-[48px] bg-primary rounded-lg text-light font-bold text-[22px] pr-[20px]">Add a book </button>
        </div>
        </div>
      </main>

    <Footer></Footer>
    </>
  )
}  