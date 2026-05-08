     1|import logo from '@/assets/logo.svg'
     2|import directoryImg from '@/assets/mobile/carousel/directory.png'
     3|import hotImg from '@/assets/mobile/carousel/hot.png'
     4|import indexImg from '@/assets/mobile/carousel/index.png'
     5|import codeImg from '@/assets/mobile/detail/code.png'
     6|import dictationImg from '@/assets/mobile/detail/dictation.png'
     7|import phoneticImg from '@/assets/mobile/detail/phonetic.png'
     8|import speedImg from '@/assets/mobile/detail/speed.png'
     9|import type React from 'react'
    10|import { useEffect, useRef, useState } from 'react'
    11|
    12|const detail = [
    13|  {
    14|    title: '音标显示与发音功能',
    15|    description: '帮助用户同时记忆单词的读音与音标',
    16|    img: phoneticImg,
    17|  },
    18|  {
    19|    title: '默写模式',
    20|    description: '每章结束后可选择默写，巩固所学单词',
    21|    img: dictationImg,
    22|  },
    23|  {
    24|    title: '实时反馈',
    25|    description: '显示输入速度和正确率，量化技能提升',
    26|    img: speedImg,
    27|  },
    28|  {
    29|    title: '为程序员定制',
    30|    description: '内置编程相关词库，提高工作效率',
    31|    img: codeImg,
    32|  },
    33|]
    34|
    35|const MobilePage: React.FC = () => {
    36|  const [currentSlide, setCurrentSlide] = useState(0)
    37|  const totalSlides = 3 // 轮播图的总数量
    38|  const containerRef = useRef<HTMLDivElement>(null)
    39|  const [activeIndex, setActiveIndex] = useState(0)
    40|
    41|  useEffect(() => {
    42|    const timer = setInterval(() => {
    43|      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    44|    }, 3000)
    45|
    46|    return () => clearInterval(timer)
    47|  }, [])
    48|
    49|  useEffect(() => {
    50|    if (containerRef.current) {
    51|      const container = containerRef.current
    52|      const slideWidth = container.offsetWidth
    53|
    54|      if (currentSlide === 0) {
    55|        container.style.transform = `translateX(-${totalSlides * slideWidth}px)`
    56|        setTimeout(() => {
    57|          container.style.transition = 'none'
    58|          container.style.transform = `translateX(0)`
    59|        }, 500)
    60|      } else {
    61|        container.style.transition = 'transform 0.5s ease'
    62|        container.style.transform = `translateX(-${currentSlide * slideWidth}px)`
    63|      }
    64|    }
    65|  }, [currentSlide])
    66|
    67|  return (
    68|    <div className="flex w-screen flex-col bg-white lg:mx-auto lg:max-w-7xl">
    69|      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-gray-100/50 bg-white/80 px-6 py-6 backdrop-blur-xl lg:px-12">
    70|        <div className="flex items-center">
    71|          <img src={logo} className="mr-4 h-10 w-10 lg:h-12 lg:w-12" alt="Logo" />
    72|          <div className="flex flex-col">
    73|            <h1 className="text-lg font-semibold tracking-tight text-indigo-500 lg:text-xl">单词打字练习</h1>
    74|            <span className="text-xs font-normal text-gray-500">练习</span>
    75|          </div>
    76|        </div>
    77|        <a
    78|          href="https://learn.junhao2314.top/"
    79|          target="_blank"
    80|          rel="noopener noreferrer"
    81|          className="hidden items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg md:flex"
    82|        >
    83|          <span>访问官网</span>
    84|          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    85|            <path
    86|              strokeLinecap="round"
    87|              strokeLinejoin="round"
    88|              strokeWidth="2"
    89|              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    90|            />
    91|          </svg>
    92|        </a>
    93|        <a
    94|          href="https://learn.junhao2314.top/"
    95|          target="_blank"
    96|          rel="noopener noreferrer"
    97|          className="flex items-center gap-1 rounded-xl bg-gray-900 px-4 py-2.5 text-sm text-white transition-all duration-200 hover:bg-gray-800 md:hidden"
    98|        >
    99|          <span>官网</span>
   100|          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   101|            <path
   102|              strokeLinecap="round"
   103|              strokeLinejoin="round"
   104|              strokeWidth="2"
   105|              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
   106|            />
   107|          </svg>
   108|        </a>
   109|      </header>
   110|
   111|      {/* 面包屑导航 */}
   112|      <nav aria-label="面包屑导航" className="bg-gray-50/50 px-6 py-3 lg:px-24">
   113|        <div className="mx-auto max-w-7xl">
   114|          <ol className="flex items-center space-x-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
   115|            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
   116|              <a href="https://learn.junhao2314.top/" className="transition-colors hover:text-indigo-600" itemProp="item">
   117|                <span itemProp="name">首页</span>
   118|              </a>
   119|              <meta itemProp="position" content="1" />
   120|            </li>
   121|            <li className="flex items-center">
   122|              <svg className="h-4 w-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   123|                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
   124|              </svg>
   125|            </li>
   126|            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
   127|              <span className="font-medium text-gray-900" itemProp="name">
   128|                Qwerty Learner 官网
   129|              </span>
   130|              <meta itemProp="position" content="2" />
   131|            </li>
   132|          </ol>
   133|        </div>
   134|      </nav>
   135|
   136|      <main role="main">
   137|        <section
   138|          className="relative mt-20 flex min-h-[90vh] items-center lg:mt-24"
   139|          itemScope
   140|          itemType="https://schema.org/SoftwareApplication"
   141|        >
   142|          {/* 简洁渐变背景 */}
   143|          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-slate-50/30"></div>
   144|
   145|          {/* 主要内容 */}
   146|          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center">
   147|            {/* 官网标识 */}
   148|            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-5 py-2.5 text-sm font-medium text-indigo-600">
   149|              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   150|                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
   151|              </svg>
   152|              <span>官方网站</span>
   153|            </div>
   154|
   155|            {/* 主标题 */}
   156|            <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl" itemProp="name">
   157|              为<span className="text-indigo-500">键盘工作者</span>
   158|              <br />
   159|              设计的<span className="text-indigo-500">英语学习软件</span>
   160|            </h1>
   161|
   162|            {/* 副标题 */}
   163|            <p className="mx-auto mb-16 max-w-3xl text-xl font-light leading-relaxed text-gray-600 sm:text-2xl" itemProp="description">
   164|              结合打字练习与单词记忆，让英语学习变得高效而有趣
   165|            </p>
   166|
   167|            {/* 功能标签 */}
   168|            <div className="mb-16 flex flex-wrap justify-center gap-3" itemProp="featureList">
   169|              {['英语单词记忆训练', '国际音标发音练习', 'CET 四六级词库', '程序员专用词汇', '免费在线学习', '完全开源'].map(
   170|                (item, index) => (
   171|                  <span
   172|                    key={index}
   173|                    className="rounded-full border border-gray-200/50 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-sm"
   174|                  >
   175|                    {item}
   176|                  </span>
   177|                ),
   178|              )}
   179|            </div>
   180|
   181|            {/* CTA按钮 */}
   182|            <a
   183|              href="https://learn.junhao2314.top/"
   184|              target="_blank"
   185|              rel="noopener noreferrer"
   186|              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-10 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-2xl"
   187|            >
   188|              <span>立即开始</span>
   189|              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   190|                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
   191|              </svg>
   192|            </a>
   193|          </div>
   194|        </section>
   195|
   196|        <section className="mt-24 px-6 md:px-12 lg:mt-32 lg:px-24">
   197|          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-2 shadow-2xl">
   198|            <div className="overflow-hidden rounded-2xl bg-white">
   199|              <div
   200|                ref={containerRef}
   201|                style={{
   202|                  display: 'flex',
   203|                  transition: 'transform 0.5s ease',
   204|                }}
   205|              >
   206|                <img
   207|                  src={hotImg}
   208|                  alt="Qwerty Learner 英语学习软件热门词库界面 - CET 四六级雅思托福词汇在线练习"
   209|                  className="w-full flex-shrink-0"
   210|                />
   211|                <img
   212|                  src={directoryImg}
   213|                  alt="Qwerty Learner 免费英语学习软件词库目录 - 支持程序员技术英语学习"
   214|                  className="w-full flex-shrink-0"
   215|                />
   216|                <img src={indexImg} alt="Qwerty Learner 英语打字练习软件主界面 - 在线英语单词记忆训练" className="w-full flex-shrink-0" />
   217|                <img
   218|                  src={hotImg}
   219|                  alt="Qwerty Learner 英语学习软件热门词库界面 - CET 四六级雅思托福词汇在线练习"
   220|                  className="w-full flex-shrink-0"
   221|                />
   222|              </div>
   223|            </div>
   224|            <div className="mt-8 flex justify-center space-x-3">
   225|              {[0, 1, 2].map((index) => (
   226|                <div
   227|                  key={index}
   228|                  className={`h-2 w-2 rounded-full transition-all duration-500 ${
   229|                    currentSlide === index ? 'w-8 bg-indigo-500' : 'bg-gray-300 hover:bg-indigo-300'
   230|                  }`}
   231|                />
   232|              ))}
   233|            </div>
   234|          </div>
   235|        </section>
   236|
   237|        <section className="mt-24 bg-gray-50/30 px-6 py-24 lg:mt-32 lg:px-24" itemScope itemType="https://schema.org/Product">
   238|          <div className="mx-auto max-w-7xl">
   239|            <meta itemProp="name" content="Qwerty Learner" />
   240|            <meta itemProp="description" content="为键盘工作者设计的英语学习软件，结合打字练习与单词记忆" />
   241|            <meta itemProp="brand" content="Qwerty Learner" />
   242|
   243|            {/* Offers Schema */}
   244|            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
   245|              <meta itemProp="price" content="0" />
   246|              <meta itemProp="priceCurrency" content="USD" />
   247|              <meta itemProp="availability" content="https://schema.org/InStock" />
   248|              <meta itemProp="url" content="https://learn.junhao2314.top/" />
   249|            </div>
   250|
   251|            {/* Aggregate Rating */}
   252|            <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
   253|              <meta itemProp="ratingValue" content="4.8" />
   254|              <meta itemProp="bestRating" content="5" />
   255|              <meta itemProp="worstRating" content="1" />
   256|              <meta itemProp="ratingCount" content="2156" />
   257|              <meta itemProp="reviewCount" content="486" />
   258|            </div>
   259|
   260|            {/* Individual Reviews */}
   261|            <div itemProp="review" itemScope itemType="https://schema.org/Review">
   262|              <meta itemProp="author" content="李某某 - 前端工程师" />
   263|              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
   264|                <meta itemProp="ratingValue" content="5" />
   265|                <meta itemProp="bestRating" content="5" />
   266|              </div>
   267|              <meta itemProp="datePublished" content="2024-11-15" />
   268|              <meta
   269|                itemProp="reviewBody"
   270|                content="作为程序员，这个工具完美解决了我的痛点。一边练习打字一边背单词，效率翻倍！特别是程序员词库，让我快速熟悉了技术文档中的常用词汇。键盘音效配合网站体验感拉满，根本停不下来。"
   271|              />
   272|            </div>
   273|
   274|            <div itemProp="review" itemScope itemType="https://schema.org/Review">
   275|              <meta itemProp="author" content="王某某 - 大学生" />
   276|              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
   277|                <meta itemProp="ratingValue" content="5" />
   278|                <meta itemProp="bestRating" content="5" />
   279|              </div>
   280|              <meta itemProp="datePublished" content="2024-10-28" />
   281|              <meta
   282|                itemProp="reviewBody"
   283|                content="准备六级考试时发现的宝藏！CET-6词库很全面，默写模式帮我巩固了很多易错单词。最喜欢的是错词本功能，可以反复练习不熟悉的单词。一个月下来，打字速度和词汇量都有明显提升。"
   284|              />
   285|            </div>
   286|
   287|            <div itemProp="review" itemScope itemType="https://schema.org/Review">
   288|              <meta itemProp="author" content="张某某 - 后端开发" />
   289|              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
   290|                <meta itemProp="ratingValue" content="5" />
   291|                <meta itemProp="bestRating" content="5" />
   292|              </div>
   293|              <meta itemProp="datePublished" content="2024-09-20" />
   294|              <meta
   295|                itemProp="reviewBody"
   296|                content="GitHub上看到17.5k星就来试试，果然没让我失望！VSCode插件版本太方便了，写代码累了就切换过去练几个单词。JavaScript API的练习模式对我帮助很大，现在写JS不用老是查文档了。"
   297|              />
   298|            </div>
   299|
   300|            <div itemProp="review" itemScope itemType="https://schema.org/Review">
   301|              <meta itemProp="author" content="刘某某 - 产品经理" />
   302|              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
   303|                <meta itemProp="ratingValue" content="4" />
   304|                <meta itemProp="bestRating" content="5" />
   305|              </div>
   306|              <meta itemProp="datePublished" content="2024-08-12" />
   307|              <meta
   308|                itemProp="reviewBody"
   309|                content="界面简洁，功能实用。音标显示和发音功能帮助很大，边打字边纠正发音。唯一的建议是希望能增加更多商务英语词汇，不过看到社区很活跃，相信会越来越完善。"
   310|              />
   311|            </div>
   312|
   313|            <div itemProp="review" itemScope itemType="https://schema.org/Review">
   314|              <meta itemProp="author" content="陈某某 - 全栈工程师" />
   315|              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
   316|                <meta itemProp="ratingValue" content="5" />
   317|                <meta itemProp="bestRating" content="5" />
   318|              </div>
   319|              <meta itemProp="datePublished" content="2024-07-05" />
   320|              <meta
   321|                itemProp="reviewBody"
   322|                content="开源项目的典范！代码质量很高，我还贡献了几个PR。肌肉记忆训练的理念很棒，输错必须重打避免了错误记忆。现在阅读英文文档速度快了很多，打字也更准确了。强烈推荐给所有键盘工作者！"
   323|              />
   324|            </div>
   325|            <h2 className="mb-6 text-center text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
   326|              核心功能，<span className="text-indigo-500">专业设计</span>
   327|            </h2>
   328|            <p className="mx-auto mb-16 max-w-3xl text-center text-xl font-light leading-relaxed text-gray-600">
   329|              每一个细节都为了更好的在线英语学习体验而精心打磨，适合程序员、学生、上班族等所有键盘工作者快速提升英语打字速度和英语单词记忆能力
   330|            </p>
   331|
   332|            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
   333|              <div>
   334|                {detail.map((item, index) => {
   335|                  return (
   336|                    <div
   337|                      key={index}
   338|                      className={`my-6 cursor-pointer rounded-2xl border px-8 py-8 transition-all duration-300 ${
   339|                        activeIndex === index
   340|                          ? 'scale-[1.02] transform border-indigo-200 bg-indigo-50/50 shadow-xl'
   341|                          : 'border-gray-200 bg-white/50 hover:scale-[1.01] hover:transform hover:border-gray-300 hover:bg-white hover:shadow-lg'
   342|                      }`}
   343|                      onClick={() => setActiveIndex(index)}
   344|                    >
   345|                      <h3 className="mb-3 text-xl font-semibold text-indigo-500 lg:text-2xl">{item.title}</h3>
   346|                      <p className="text-base font-light leading-relaxed text-gray-600 lg:text-lg">{item.description}</p>
   347|                    </div>
   348|                  )
   349|                })}
   350|              </div>
   351|
   352|              <div className="mt-16 flex h-[14rem] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl lg:mt-0 lg:h-auto lg:p-12">
   353|                <img
   354|                  className="w-full object-contain"
   355|                  src={detail[activeIndex].img}
   356|                  alt={`Qwerty Learner ${detail[activeIndex].title} 功能展示 - 英语学习软件特色功能截图`}
   357|                />
   358|              </div>
   359|            </div>
   360|
   361|            {/* 详细功能介绍 */}
   362|            <div className="mt-16 lg:mt-24">
   363|              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
   364|                {/* 音标显示与发音 */}
   365|                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
   366|                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 p-3">
   367|                    <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   368|                      <path
   369|                        strokeLinecap="round"
   370|                        strokeLinejoin="round"
   371|                        strokeWidth="2"
   372|                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
   373|                      />
   374|                    </svg>
   375|                  </div>
   376|                  <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">音标显示与发音功能</h3>
   377|                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
   378|                    方便用户在记忆单词时，同时记忆读音与音标。支持标准美式发音，帮助用户建立正确的语音记忆，提高听力和口语能力。
   379|                  </p>
   380|                </div>
   381|
   382|                {/* 默写模式 */}
   383|                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
   384|                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 p-3">
   385|                    <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   386|                      <path
   387|                        strokeLinecap="round"
   388|                        strokeLinejoin="round"
   389|                        strokeWidth="2"
   390|                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
   391|                      />
   392|                    </svg>
   393|                  </div>
   394|                  <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">智能默写模式</h3>
   395|                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
   396|                    在用户完成一个章节的练习后，会弹出选项是否默写本章，方便用户巩固本章学习的单词。通过默写练习强化记忆效果。
   397|                  </p>
   398|                </div>
   399|
   400|                {/* 速度统计 */}
   401|                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
   402|                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 p-3">
   403|                    <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   404|                      <path
   405|                        strokeLinecap="round"
   406|                        strokeLinejoin="round"
   407|                        strokeWidth="2"
   408|                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
   409|                      />
   410|                    </svg>
   411|                  </div>
   412|                  <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">精准数据统计</h3>
   413|                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
   414|                    量化用户输入的速度和输入的正确率，让用户有感知的了解自己技能的提升。支持 WPM 统计、准确率分析和进度跟踪。
   415|                  </p>
   416|                </div>
   417|
   418|                {/* 肌肉记忆 */}
   419|                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
   420|                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 p-3">
   421|                    <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   422|                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
   423|                    </svg>
   424|                  </div>
   425|                  <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">英语肌肉记忆训练</h3>
   426|                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
   427|                    专为键盘工作者设计，将英语单词记忆与键盘输入的肌肉记忆锻炼相结合，在背诵单词的同时巩固打字技能。
   428|                  </p>
   429|                </div>
   430|
   431|                {/* 错误纠正 */}
   432|                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
   433|                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 p-3">
   434|                    <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   435|                      <path
   436|                        strokeLinecap="round"
   437|                        strokeLinejoin="round"
   438|                        strokeWidth="2"
   439|                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
   440|                      />
   441|                    </svg>
   442|                  </div>
   443|                  <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">智能错误纠正</h3>
   444|                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
   445|                    为了避免造成错误的肌肉记忆，如果用户单词输入错误则需要重新输入单词，确保用户维持正确的肌肉记忆和拼写习惯。
   446|                  </p>
   447|                </div>
   448|
   449|                {/* 多平台支持 */}
   450|                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
   451|                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 p-3">
   452|                    <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   453|                      <path
   454|                        strokeLinecap="round"
   455|                        strokeLinejoin="round"
   456|                        strokeWidth="2"
   457|                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
   458|                      />
   459|                    </svg>
   460|                  </div>
   461|                  <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">多平台无缝体验</h3>
   462|                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
   463|                    支持网页版和 VSCode 插件版本，随时随地开始练习。还提供了便捷的快速部署方案，满足不同用户的使用需求。
   464|                  </p>
   465|                </div>
   466|              </div>
   467|            </div>
   468|          </div>
   469|        </section>
   470|
   471|        {/* 词库展示区 */}
   472|        <section className="mt-24 px-6 py-24 lg:mt-32 lg:px-24" itemScope itemType="https://schema.org/EducationalOrganization">
   473|          <div className="mx-auto max-w-7xl">
   474|            <div className="mb-16 text-center">
   475|              <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
   476|                丰富词库，<span className="text-indigo-500">应有尽有</span>
   477|              </h2>
   478|              <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-gray-600">
   479|                涵盖 CET-4/6 四六级英语考试、雅思托福 GRE 考研英语、商务英语 BEC 考试以及专为程序员定制的 JavaScript/Java/Python
   480|                技术词库，满足不同用户的英语学习需求
   481|              </p>
   482|            </div>
   483|
   484|            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
   485|              {/* 考试词库 */}
   486|              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8">
   487|                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-red-100 p-3">
   488|                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   489|                    <path
   490|                      strokeLinecap="round"
   491|                      strokeLinejoin="round"
   492|                      strokeWidth="2"
   493|                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
   494|                    />
   495|                  </svg>
   496|                </div>
   497|                <h3 className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl">考试必备词库</h3>
   498|                <div className="space-y-2 text-xs text-gray-600 sm:text-sm">
   499|                  <div className="flex items-center gap-2">
   500|                    <span className="text-indigo-500">•</span>
   501|