import { Footer } from "../Components/Partials/Footer"
import { Header } from "../Components/Partials/Header"




export const FAQPage = () => {
  return (
    <>
      <Header></Header>
      <main className=" mt-[96px] px-0 m-[16px] ">
        <div className="pb-4">
            <p className="text-dark font-bold text-[32px] w-full py-1 pt-4 ">
            FAQs
            </p>
          <hr class="w-[84px] h-1 mt-1 bg-dark border-0 rounded m-0 "></hr>
        </div>
        
      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            What’s the purpose of this App?
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              The purpose is to have a platform where people can exchange books via donation or swap and share their thoughts on them.
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
        What is the price to use the App?
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              This App is free to use and it encourages donation and swap so books can become more accessible for all readers out there.         
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            How can I add my books?            
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              Simply go to the Home page and click on the Add Book button to bring up the upload form. Fill out the details and it to the feed.         
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            Who is this App for?            
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              This App is for anybody who enjoys reading and sharing their experience with others.              
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            Why a book I saw on the Home page disappeared?            
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              It could be that someone reserved it for exchange. Whenever you select a book you want from other users it disappears from the feed for 3 days.              
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            How does the exchange works?            
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              You can use the chat page to get in contact with the owner of your desired book and hash out when and where you can do the exchange.              
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            What is the meaning of life?            
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              The meaning of life is 47.              
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            Who assassinated JFK?            
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              Some pissed of extremist probably.              
              </p>
            </div>
          </details>
      </div>

      <div>
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            Why I can’t think of any relevant question? 
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              You’re probably very close to a burn-out.             
              </p>
            </div>
          </details>
      </div>


      <div className="pb-[104px]">
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg rounded-lg px-1 pt-2 pb-8 my-4">
            <summary class="text-[22px] leading-6 text-primary dark:text-white font-bold select-none">
            Is it lunch already?            
            </summary>
            <div class="mt-3 text-[16px] leading-6 text-dark dark:text-slate-400 text-center">
            <div className="p-4">
            <hr class="h-0.5 mt-1 bg-primary border-0 rounded"></hr>
            </div>
              <p>
              Nope. Not yet.              
              </p>
            </div>  
          </details>
      </div>

        
        
      </main>

    <Footer></Footer>
    </>
  )
};
