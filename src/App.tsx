import { motion } from 'framer-motion'
import './App.css'
import { useInView } from 'react-intersection-observer';
function App() {
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });
  const [refTitle2, inViewTitle2] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });
  const [refTitle3, inViewTitle3] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });
  const [refHead, inViewHead] = useInView({
    triggerOnce: true, // 仅触发一次动画
    threshold: 0.1, // 元素进入可见区域的阈值
  });

  return (
    <>
      <div
        className="bg-[#fbfbfd] text-black p-[20px] lg:p-[2px] lg:px-[100px] w-screen overflow-hidden relative transform-gpu tracking-[0.02em]">
        <h1
          className="font-bold text-[32px] leading-[40px] max-w-[220px] relative mt-[58px] lg:mt-[175px] lg:text-[64px] lg:leading-[55px] lg:w-[600px] capitalize sm:max-w-fit">
          <div
            className="relative z-10 flex flex-row items-center justify-start gap-[5px] lg:gap-[10px] flex-wrap leading-[31.68px] lg:leading-[55px] max-w-fit">
            <div className="head-motion-span flex-wrap lg:flex-nowrap lg:leading-[55px] leading-[40px]">
              <img src="assets/p1circle.svg" className='w-[60px] left-[36px] top-[-14px] lg:min-w-[111px] lg:h-auto absolute lg:left-[56px] lg:top-[-24px] lg:object-cover' style={{ zIndex: 0 }}></img>

              <motion.div
                initial={{ y: 20 }}
                animate={{ y: inViewHead ? 0 : 40 }}
                transition={{ duration: 0.1 }}
                style={{ zIndex: 1 }} 
              >
                Enhance
              </motion.div>
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: inViewHead ? 0 : 40 }}
                transition={{ duration: 0.2 }}
              >
                Capital
              </motion.div>
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: inViewHead ? 0 : 40 }}
                transition={{ duration: 0.3 }}
              >
                Efficiency
              </motion.div>
            </div>


          </div>
        </h1>
        <p className="text-[#686972] w-8/12 font-normal text-[16px] leading-[20px]  mt-[40px] lg:text-[24px] lg:w-[850px] lg:leading-[36px] z-20 relative"
          style={{ opacity: 1 }}>Crebit is an SVB model on-chain lending protocol which enable liquidity flow between LPs and projects.</p>
        <img src="assets/p1bg.svg"
          className=" lg:min-w-[447px] lg:h-auto lg:object-cover absolute right-[0px] top-[0px] bg-repeat-x" style={{ opacity: 1, transform: "none" }} />
        <img src="assets/p1gradients.svg"
          className=" w-full lg:min-w-[447px] lg:h-auto lg:object-cover absolute right-[0px] top-[0px]" style={{ opacity: 0.2, transform: "none" }}></img>

        {/* 2 */}
        <motion.div
          initial={{ y: -40 }}
          animate={{ y: inViewHead ? 0 : -40 }}
          transition={{ duration: 0.5 }}
          ref={refHead}
        >
          <div className="flex flex-row mt-[25px] gap-[25px] lg:mt-[50px]">
            <a href="https://arbitrum.TODO:.xyz/lending"
              target="_blank">

              <button
                className="font-bold text-black text-[15px] leading-[13px] text-center h-[36px] w-[130px] bg-gradient-to-r  rounded-md relative lg:w-[184px] lg:h-[48px] lg:text-[16px] z-30 group"
                style={{ opacity: 1, transform: "none", background: "linear-gradient(to right, #c0feef, #19fffb)", border: "1px solid #39a29a", borderTop: "1px solid #57b68d", borderBottom: "1px solid #1589aa" }}>
                Lend
                <div className='absolute top-0 left-0 buttoncolor'></div>
              </button>

            </a>
            <a href="https://arbitrum.TODO:.xyz/lending" target="_blank"
              style={{ opacity: 1, transform: "none" }}
              className='ml-[8px]'
            >
              <button
                className="font-bold text-black text-[15px] leading-[13px] text-center h-[36px] w-[130px] bg-gradient-to-r  rounded-md relative lg:w-[184px] lg:h-[48px] lg:text-[16px] z-30 group"
                style={{ opacity: 1, transform: "none", background: "#fff", border: "1px solid #39a29a", borderTop: "1px solid #57b68d", borderBottom: "1px solid #1589aa" }}>
                Borrow
                <div className='absolute top-0 left-0 buttoncolor'></div>
              </button>
            </a>
          </div>
        </motion.div>
        <div className="relative">
          <div
            className="w-[120vw] h-full max-h-[400px] absolute top-0 left-0 bg-gradient-to-b from-transparent  -translate-y-[30%] -translate-x-[10vw] transform-gpu transition-all duration-300 lg:hidden">
          </div>
          <div className="lg:flex flex-row items-center justify-between mt-[380px] lg:mt-[500px] z-50 relative overflow-visible"
            style={{ opacity: 1 }}>
            <div>
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle ? 0 : -150 }}
                transition={{ duration: 0.5 }}
                ref={refTitle}
              >
                <h1 className="font-bold text-[34px] leading-[32px]  relative lg:text-[42px] capitalize lg:mt-[146px] lg:text-[63px]"
                ><span className="relative z-10 w-fit ">
                    Benefit to Projects
                  </span></h1>
              </motion.div>
              <motion.div
                initial={{ x: -150 }}
                transition={{ duration: 1 }}
                animate={{ x: inViewTitle ? 0 : -150 }}
              >
                <p className="text-[#686972]  font-normal text-[16px] leading-[20px]  mt-[24px] lg:text-[24px] lg:w-4/6 lg:leading-[36px] lg:mt-[44px]"
                  style={{ opacity: 1, transform: "none" }}>Early stage projects are lack of liquidity and willing to pay alpha token + interest
                  DeFi rates</p>
              </motion.div>
              <motion.div
                initial={{ x: 50 }}
                animate={{ x: inViewTitle ? 0 : 100 }}
                transition={{ duration: 1 }}
              >

                <a href="https://arbitrum.TODO:.xyz/lending" target="_blank"
                  style={{ opacity: 1, transform: "none" }}
                  className='ml-[8px]'
                >
                  <button
                    className="font-bold text-black text-[15px] leading-[13px] text-center h-[36px] w-[140px] bg-gradient-to-r  rounded-md relative lg:w-[184px] lg:h-[48px] lg:text-[16px] z-30 group mt-[48px]"
                    style={{ opacity: 1, transform: "none", background: "#fff", border: "1px solid #39a29a", borderTop: "1px solid #57b68d", borderBottom: "1px solid #1589aa" }}>
                    Learn more
                    <div className='absolute top-0 left-0 buttoncolor'></div>
                  </button>
                </a>
              </motion.div>
            </div>

            <div style={{ transform: " translateY(86px) translateZ(0px)" }}>
              <img src="assets/p2bg.svg"
                className="w-[384px] lg:w-[384px] lg:h-auto lg:object-cover" style={{ opacity: 1, transform: "none" }} />
            </div>
          </div>
          {/* 3 */}
          <div className="lg:flex flex-row-reverse items-center justify-between mt-[175px] z-10 relative overflow-visible"
            style={{ opacity: 1 }}>

            <div className="lg:flex-1 relative z-10">
              <motion.div
                initial={{ x: 150 }}
                animate={{ x: inViewTitle2 ? 0 : 150 }}
                transition={{ duration: 0.5 }}
                ref={refTitle2}
              >
                <h1 className="font-bold text-[34px] leading-[32px]  relative  text-right lg:text-[42px] capitalize lg:mt-[166px] lg:text-[63px] lg:w-[950px] p3h1"
                  style={{ opacity: 1, transform: "none" }}><span className="relative z-10 w-fit">
                    Benefit to Liquidity Providers
                  </span></h1>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                animate={{ x: inViewTitle2 ? 0 : 150 }}
                transition={{ duration: 1 }}
              >


                <p className="text-[#686972]  font-normal text-[16px] leading-[20px] mt-[24px] text-right lg:text-[24px] lg:w-5/6 lg:max-w-[500px] lg:leading-[36px] lg:ml-auto lg:mt-[55px] relative z-10"
                  style={{ opacity: 1, transform: "none" }}>Get interest while earn alpha token</p>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                animate={{ x: inViewTitle2 ? 0 : 150 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-row justify-end">
                  <a href="https://arbitrum.TODO:.xyz/lending" target="_blank"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <button
                      className="font-bold text-black text-[15px] leading-[13px] text-center h-[36px] w-[140px] bg-gradient-to-r  rounded-md relative lg:w-[184px] lg:h-[48px] lg:text-[16px] z-30 group mt-[56px]"
                      style={{ opacity: 1, transform: "none", background: "#fff", border: "1px solid #39a29a", borderTop: "1px solid #57b68d", borderBottom: "1px solid #1589aa" }}>
                      Learn more
                      <div className='absolute top-0 left-0 buttoncolor'></div>
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="lg:flex-1 p3" 
            style={{  transformOrigin: 'left', position: 'relative', left: "-100px" }}
            >
              <img src="assets/p3bg.svg"
                className="lg:h-auto lg:object-cover" />
            </div>

          </div>
          {/* 4 */}
          <div className="lg:flex flex-row items-center justify-between mt-[-22px] lg:gap-[50px] relative w-full"
            style={{ opacity: 1 }}>
            
            <div className="relative z-10 lg:flex-1">
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle3 ? 0 : -150 }}
                transition={{ duration: 0.5 }}
                ref={refTitle3}
              >
                <h1 className="p4h1 font-bold text-[34px] leading-[32px]  relative lg:text-[42px] capitalize lg:mt-[146px] lg:text-[63px]"
                 >
                    
                    Benefit to Public Chain
                  </h1>
              </motion.div>
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle3 ? 0 : -150 }}
                transition={{ duration: 1 }}
              >
                <p className="text-[#686972]  font-normal text-[16px] leading-[20px]  mt-[24px] lg:text-[24px] lg:min-w-[350px] lg:max-w-[576px] lg:leading-[36px] lg:mt-[66px]"
                  style={{ opacity: 1, transform: "none" }}>A new tool to help the ecosystem growth</p>
              </motion.div>
              <motion.div
                initial={{ x: -150 }}
                animate={{ x: inViewTitle3 ? 0 : -150 }}
                transition={{ duration: 0.5 }}
              >
                <a href="https://arbitrum.TODO:.xyz/lending" target="_blank"
                  style={{ opacity: 1, transform: "none" }}
                  className='ml-[8px]'
                >
                  <button
                    className="font-bold text-black text-[15px] leading-[13px] text-center h-[36px] w-[140px] bg-gradient-to-r  rounded-md relative lg:w-[184px] lg:h-[48px] lg:text-[16px] z-30 group mt-[66px]"
                    style={{ opacity: 1, transform: "none", background: "#fff", border: "1px solid #39a29a", borderTop: "1px solid #57b68d", borderBottom: "1px solid #1589aa" }}>
                    Learn more
                    <div className='absolute top-0 left-0 buttoncolor'></div>
                  </button>
                </a>
              </motion.div>
            </div>
            <div className='p4bg' >
              <img
                src="assets/p4bg.svg"
                className="w-auto lg:min-w-[450px] lg:max-w-[892px] mt-[20px] lg:w-full  lg:h-auto lg:object-cover md:mt-[100px]"
                style={{ opacity: 1, transform: "none" }} />
            </div>
          </div>
        </div>

{/* 5 */}
        <div className='relative lg:mt-[243px]' >
          <img className="absolute right-[-83px] top-0 p5" src="assets/p5lines.svg" />
          <div>
            <div>
              <div className="relative z-20  w-full" style={{
                alignItems: "center",
                display: "flex"
              }} >
                <h1 className="qah1 font-bold mt-[40px] ml-[3px] text-[32px] leading-[55px]  text-left lg:text-[42px]  lg:text-[58px] " >Q&A</h1>
              </div>
            </div>

            <h1 className="font-blod text-[34px] leading-[32px]  relative lg:text-[31px] lg:mt-[70px] lg:text-[30px]"
              style={{ opacity: 1, transform: "none" }}>
                How to mitigate the risk?
              </h1>
            <p className="text-[#686972]  font-normal text-[16px] leading-[20px]  mt-[24px] lg:text-[24px]  lg:leading-[36px] lg:mt-[43px]"
              style={{ opacity: 1, transform: "none" }}>Crebit set transparent rules to manage liquidity risk and credit risk. For details, pls refer to our documents.</p>

            <a href="https://arbitrum.TODO:.xyz/lending" target="_blank"
              style={{ opacity: 1, transform: "none" }}
              className='ml-[8px]'
            >
              <button
                className="font-bold text-black text-[15px] leading-[13px] text-center h-[36px] w-[140px] bg-gradient-to-r  rounded-md relative lg:w-[184px] lg:h-[48px] lg:text-[16px] z-30 group mt-[47px]"
                style={{ opacity: 1, transform: "none", background: "#fff", border: "1px solid #39a29a", borderTop: "1px solid #57b68d", borderBottom: "1px solid #1589aa" }}>
                Documentation
                <div className='absolute top-0 left-0 buttoncolor'></div>
              </button>
            </a>
            <div className="lg:flex lg:flex-row lg:justify-between lg:mt-[132px] gap-[30px] lg:max-w-full w-800">
              <img className="p5bg left-0 top-0 ml-[-100px]" src="assets/p5bg.svg" />
              <div className="p5box flex flex-col mt-[57px] lg:mt-0 relative z-10 w-[790px]" style={{ opacity: 1, transform: "none" }}>
                <div className="flex flex-col mt-[32px] lg:mt-[14px] lg:max-w-[793px]">
                  <div className="flex flex-row justify-between items-start relative z-20 cursor-pointer">
                    <h1 className="p5h1 font-normal text-[22px]  lg:text-[32px] w-10/12 lg:max-w-full mt-[12px]" >How the reserve pool works?</h1>

                  </div>
                  <p
                    className="p5p text-[18px] pt-[10px] text-[#686972] font-normal lg:text-[24px] lg:min-w-fit lg:w-full lg:max-w-[658px] transition-all duration-300 mt-[23px] mb-[-20px]">
                    The reserve pool is used to mitigate the default risk of the lending.
                  </p>
                  <div className="w-5/6 h-[6px] mt-[15px] lg:mt-[95px] underline" style={{ backgroundImage: "linear-gradient(to right, black,#9b9b9c 40%,#d3d3d5 60%, transparent 100%)", backgroundPosition: "25% 0", borderRadius: '10px' }}></div>
                </div>
                <div className="flex flex-col mt-[32px] lg:mt-[57px] lg:max-w-[793px]">
                  <div className="flex flex-row justify-between items-start relative z-20 cursor-pointer">
                    <h1 className="p5h1  font-normal text-[22px]  lg:text-[32px] w-10/12 lg:max-w-full mt-[12px]" >What is the role of the voters?</h1>

                  </div>
                  <p
                    className="p5p text-[18px] pt-[10px] text-[#686972] font-normal lg:text-[24px] lg:min-w-fit lg:w-full lg:max-w-[658px] transition-all duration-300 mt-[2px] mb-[-20px]">
                    Voters are the key successful factor in crebit ecosystem, they have the voting rights to approve the funds in the lending pool to borrowers
                  </p>
                  <div className="w-5/6 h-[6px] mt-[15px] lg:mt-[96px] underline" style={{ backgroundImage: "linear-gradient(to right, black,#9b9b9c 40%,#d3d3d5 60%, transparent 100%)", backgroundPosition: "25% 0", borderRadius: '10px' }}></div>
                </div>
                <div className="flex flex-col mt-[32px] lg:mt-[57px] lg:max-w-[793px] relative z-50">
                  <div className="flex flex-row justify-between items-start relative z-20 cursor-pointer">
                    <h1 className="p5h1  font-normal text-[22px]  lg:text-[32px] w-10/12 lg:max-w-full mt-[-8px]" >Who can be the voters?</h1>

                  </div>
                  <p
                    className="p5p text-[18px] pt-[10px] text-[#686972] font-normal lg:text-[24px] lg:min-w-fit lg:w-full lg:max-w-[658px] transition-all duration-300 mt-[16px] mb-[-20px]">
                    Only the token owner can be the voters. How to get the token, pls refer to tokenomics.
                  </p>
                  <div className="w-5/6 h-[6px] mt-[15px] lg:mt-[109px] underline" style={{ backgroundImage: "linear-gradient(to right, black,#9b9b9c 40%,#d3d3d5 60%, transparent 100%)", backgroundPosition: "25% 0", borderRadius: '10px' }}></div>
                </div>
              </div>

            </div>
          </div>
       </div>
        <div className='flex justify-center font-bold text-[24px] lg:text-[45px] mb-[290px] mt-[100px] ' >Audited And Secured By:</div>
      </div>

    </>
  )
}

export default App
