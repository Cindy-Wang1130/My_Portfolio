import React, { useState, useEffect } from 'react';

// 導覽列組件 (Navbar)
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // 偵測滾動位置
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'timeline', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: '20px', zIndex: 1000, margin: '0 20px',
      backgroundColor: '#fbfbf9',
      backdropFilter: 'blur(12px)',
      border: '4px solid #33272a', borderRadius: '20px', padding: '12px 24px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      boxShadow: '6px 6px 0px 0px #33272a'
    }}>
      {/* 姓名標籤 */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ 
          fontWeight: '900', fontSize: '18px', letterSpacing: '0.1em', 
          color: '#33272a', cursor: 'pointer' 
        }}
      >
        WANG SHU CHUN / 王淑君
      </div>      

      {/* 選單清單 */}
      <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { name: 'About', id: 'about' },
          { name: 'Timeline', id: 'timeline' },
          { name: 'Projects', id: 'projects' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <li key={item.name}>
            <a href={`#${item.id}`} style={{
              textDecoration: 'none',
              color: activeSection === item.id ? '#9656a1' : '#33272a',
              fontSize: '14px', fontWeight: '900', textTransform: 'uppercase',
              borderBottom: activeSection === item.id ? '4px solid #9656a1' : 'none',
              paddingBottom: '4px',
              transition: 'all 0.3s ease'
            }}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// 英雄區組件 (Hero Section)
const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '83vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 10% 60px',
      backgroundColor: '#fbfbf9'
    }}>
      <style>{`
        .hero-headline {
          font-family: 'Noto Sans TC', 'Inter', sans-serif;
          letter-spacing: -0.02em;
          word-break: keep-all;
        }
      `}</style>
      
      {/* 1. 左側文案區 */}
      <div style={{ flex: '1.2', zIndex: 2 }}>
        <h1 className="hero-headline" style={{
          fontSize: 'clamp(32px, 5vw, 68px)', fontWeight: '900', lineHeight: '1.2',
          color: '#1D1D1F', margin: '0 0 40px 0', maxWidth: '850px'
        }}>
          我透過數據與 AI，<br />
          <span style={{ 
            backgroundImage: 'linear-gradient(to right, #1D1D1F, #6A1B9A)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>幫企業找回被浪費掉的時間與營收。</span>
        </h1>

        {/* 副標題與個人介紹 */}
        <div style={{
          fontSize: 'clamp(18px, 1.8vw, 20px)', fontWeight: '500', lineHeight: '1.8',
          color: '#424245', maxWidth: '750px', marginBottom: '48px',
          fontFamily: 'Noto Sans TC', letterSpacing: '0.01em'
        }}>
          <p style={{ marginBottom: '10px', color: '#1D1D1F', fontWeight: '600' }}>
            簡而言之，我擅長把<span style={{color: '#9656a1', fontWeight: '600', opacity: 0.8}}>手動的瑣事</span>，變成<span style={{color: '#9656a1', fontWeight: '900'}}>自動的產出</span>，
            透過數據把<span style={{color: '#9656a1', fontWeight: '600', opacity: 0.8}}>猜測</span>變成<span style={{color: '#9656a1', fontWeight: '900'}}>決策</span>。
          </p>
        </div>

        {/* 技術標籤 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', zIndex: 2 }}>
          {['Growth Mindset', 'Automation Architect', 'Data To Decision', 'Bridge Builder'].map(tag => (
            <span key={tag} style={{
              padding: '8px 20px', border: '1.5px solid #33272a', borderRadius: '100px',
              fontSize: '12px', fontWeight: '700', color: '#faeee7', backgroundColor: '#33272a',
              fontFamily: 'Inter', letterSpacing: '0.15em', textTransform: 'uppercase'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// 關於我 (About Section)
const About = () => {
  return (
    <section id="about" style={{
      minHeight: '90vh',
      scrollSnapAlign: 'start',
      padding: '70px 10% 120px', 
      backgroundColor: '#fbfbf9',
      position: 'relative',
      display: 'flex',
      alignItems: 'center' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(12, 1fr)', 
        gap: '60px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%'
      }}>
        
        {/* 2. 左側：創業實績 */}
        <div style={{ gridColumn: 'span 7', marginTop: '-20px' }}>
          <h2 style={{ 
            fontSize: '36px', fontWeight: '900', color: '#33272a', 
            marginBottom: '32px', lineHeight: '1.4' 
          }}>
            關於我：<br />
            <span style={{ color: '#9656a1' }}>從 0 到 1 的數據驅動實踐者</span>
          </h2>
          
          <p style={{ 
            fontSize: '18px', lineHeight: '1.9', color: '#424245', 
            marginBottom: '40px', fontFamily: 'Noto Sans TC' 
          }}>
            我是王淑君，擁有<strong>陽明交通大學管理科學碩士</strong>與<strong>清華大學資工與管理雙專長</strong>背景。
            大學期間，我共同創辦教育新創品牌<strong>超詳解</strong>，透過精準的公私域流量佈局，我成功將品牌從零推升至<strong>6.9 萬人</strong>追蹤。
            我擅長利用數據洞察捕捉用戶需求，並將其轉化為具備商業影響力的產品策略。在這五年期間，我達成以下里程碑：
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { 
                label: "社群流量主導", 
                content: "經營品牌社群 IG，達成 <span style='color:#9656a1; font-weight:900'>6.9 萬</span> 追蹤，單篇爆文觸及突破 <span style='color:#9656a1; font-weight:900'>77 萬</span> 人次。" 
              },
              { 
                label: "數據驅動增長", 
                content: "利用社群數據分析受眾行為並優化行銷漏斗，推動年度營收突破 <span style='color:#9656a1; font-weight:900'>100 萬</span> 台幣，<br/>產品銷量翻倍成長。" 
              },
              { 
                label: "私域流量經營", 
                content: "透過公、私領域策略優化維持高黏著度互動，達成 <span style='color:#9656a1; font-weight:900'>95% 以上</span> 的使用者滿意度。" 
              }
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '4px solid #33272a', paddingLeft: '20px' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', color: '#7a7a7cff', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#33272a' }} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ))}
          </div>
        </div>

        {/* 3. 右側：榮譽矩陣與按鈕 */}
        <div style={{ 
          gridColumn: 'span 5', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          gap: '0' 
        }}>
          {/* 🏆 榮譽與競賽卡片 */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '10px 30px 30px', 
            borderRadius: '24px', 
            color: '#33272a', 
            boxShadow: '10px 10px 10px rgba(2, 2, 2, 0.38)', 
            border: '1px solid rgba(0,0,0,0.02)', 
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h4 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '25px', color: '#33272a' }}>
              🏆 榮譽與競賽
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              {[
                { year: 'Award', award: '陽明交通大學書卷獎兩次' },
                { year: '2022', award: '校園創新生活實驗室 成果獎 & 人氣獎' },
                { year: '2021', award: '清華大學科管盃個案比賽 第二名' },
                { year: '2020', award: '梅竹黑客松 Girls in Tech 第二名' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '12px', 
                    padding: '8px 12px',
                    borderRadius: '12px',
                    borderBottom: i === 3 ? 'none' : '1.5px solid #f1f1f1',
                    transition: 'all 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F3E5F5';
                    e.currentTarget.style.color = '#9656a1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#33272a';
                  }}
                >
                  {/* 小圖示：淡紫色勾 */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9656a1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div style={{ display: 'flex', gap: '15px', flex: 1 }}>
                    <span style={{ fontWeight: '900', color: 'inherit', minWidth: '45px', opacity: 0.7 }}>{item.year}</span>
                    <span style={{ fontWeight: '500', color: 'inherit' }}>{item.award}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔗 品牌 IG 按鈕 */}
          <a 
            href="https://www.instagram.com/exam_kingg/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              borderRadius: '16px',
              backgroundColor: 'transparent',
              color: '#33272a',
              textDecoration: 'none',
              fontWeight: '900',
              fontSize: '15px',
              border: '2px solid #33272a',
              transition: 'all 0.3s ease',
              gap: '10px',
              marginTop: '60px' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#33272a';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#33272a';
            }}
          >
            <span>🔗 探索品牌：超詳解 IG </span>
          </a>
        </div>
      </div>
    </section>
  );
};

// 實習 Timeline (Timeline Section)
const Internship_Timeline = () => {
  const timeline = [
    {
      company: "BenQ 明基電通",
      role: "台灣/英語區數位行銷實習生",
      period: "Jul. 2022 – Jun. 2023",
      logo: "/benqlogo.png"
    },
    {
      company: "SHOPLINE 商線科技",
      role: "客戶成功實習生",
      period: "Jul. 2023 – Feb. 2024",
      logo: "/shoplinelogo.png"
    },
    {
      company: "TSMC 台積電",
      role: "智慧製造工程師實習生",
      period: "Jul. 2024 – Aug. 2024",
      logo: "/tsmclogo.png"
    },
    {
      company: "MoBagel 美商行動貝果",
      role: "資料科學家實習生",
      period: "Jan. 2025 – Jun. 2025",
      logo: "/mobagellogo.jfif"
    }
  ];

  return (
    <section id="timeline" style={{ 
      padding: '100px 0', 
      backgroundColor: '#fbfbf9', 
      overflow: 'hidden' 
    }}>
      <div style={{ padding: '0 5%', marginBottom: '32px' }}>
        <h2 style={{ 
            fontFamily: 'Inter', fontSize: '30px', fontWeight: '900', color: '#33272a', 
            marginBottom: '32px', lineHeight: '1.4'
          }}>
            跨域職涯探索：<br />
            <span style={{ color: '#9656a1' }}>從數位行銷到資料科學的實習經歷</span>
        </h2>
      </div>            

      <div style={{ position: 'relative', width: '90%', padding: '0 12% 0 5%' }}>        
        {/* 水平線 */}
        <div style={{ 
          position: 'absolute', 
          top: '9px',
          left: '0', 
          right: '0', 
          height: '5px', 
          backgroundColor: '#33272a', 
          zIndex: 1 
        }} />

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2
        }}>
          {timeline.map((item, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              
              {/* 時間點圓點 */}
              <div style={{ 
                width: '18px', height: '18px', 
                backgroundColor: '#9656a1', 
                border: '4px solid #fbfbf9', 
                borderRadius: '50%',
                boxShadow: '0 0 0 2px #33272a',
              }} />

              {/* 垂直連接線 */}
              <div style={{
                width: '4px',
                height: i % 2 === 0 ? '70px' : '150px',
                backgroundColor: '#33272a'
              }} />
              
              {/* 資訊卡片：懸浮質感 */}
              <div style={{ 
                width: '70%',
                backgroundColor: '#ffffffff',
                padding: '24px 15px',
                borderRadius: '20px',
                boxShadow: '10px 10px 10px rgba(2, 2, 2, 0.38)',
                border: '1px solid rgba(0,0,0,0.02)',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ 
                  height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' 
                }}>
                  <img src={item.logo} alt={item.company} style={{ maxHeight: '100%', maxWidth: '80%' }} />
                </div>

                <div style={{ fontSize: '12px', fontWeight: '900', color: '#1D1D1F', marginBottom: '8px' }}>
                  {item.period}
                </div>
                
                <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#9656a1', margin: '0 0 5px 0', lineHeight: '1.4' }}>
                  {item.company}
                </h4>
                
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#1D1D1F', margin: 0, lineHeight: '1.4' }}>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 實習專案經驗 (Internship Project Section)
const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 10%', backgroundColor: '#fbfbf9' }}>
      {/* --- 行動貝果 --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', marginBottom: '120px', alignItems: 'start' }}>
        
        {/* 左側文字內容 (佔 7 格) */}
        <div style={{ gridColumn: 'span 7' }}>
          <h2 style={{ fontFamily: 'Noto Sans TC', fontSize: '36px', fontWeight: '900', lineHeight: '1.3', marginBottom: '24px', color: '#1D1D1F' }}>
            從產品開發到效能提升：<br /><span style={{ color: '#9656a1' }}>打造 AI 驅動的自動化平台</span>
          </h2>

          <div style={{ fontSize: '18px', lineHeight: '1.9', color: '#424245', marginBottom: '40px', fontFamily: 'Noto Sans TC' }}>
            <p><strong>需求識別：</strong> 分析商業命題時，發現現有工具缺乏資料前處理功能，導致非技術人員需頻繁依賴手動清洗數據，無法專注於核心業務與模型開發。</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { 
                label: "Streamlit 資料前處理網頁", 
                content: "開發<span style='color:#9656a1; font-weight:900'>自動化資料清洗網頁</span>，讓非技術背景同仁也能輕鬆匯入、處理並直接使用數據。" 
              },
              { 
                label: "對話式建模 (MCP 整合)", 
                content: "透過 MCP 結合公司產品，實現透過<span style='color:#9656a1; font-weight:900'>自然語言對話即可完成數據建模</span>的自動化流程。" 
              },
              { 
                label: "n8n 客製化工作流程 (自動化 Workflow)", 
                content: "利用 RAG 結合外部知識庫，產出具備專業知識背景的<span style='color:#9656a1; font-weight:900'>客製化自動回覆信件</span>。" 
              }
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '4px solid #33272a', paddingLeft: '20px' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', color: '#1D1D1F', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#33272a' }} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
            {['AI Agents', 'MCP Protocol', 'Streamlit', 'n8n Automation'].map(tag => (
              <span key={tag} style={{ padding: '6px 14px', backgroundColor: '#cfbed2ff', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* 右側媒體展示區 (佔 5 格) */}
        <div style={{ 
          gridColumn: 'span 5', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%', 
          gap: '20px',
        }}>

          {/* 1. 影片展示卡片 */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '30px', 
            padding: '15px', 
            boxShadow: '10px 10px 10px rgba(2, 2, 2, 0.38)',
            border: '1px solid rgba(0,0,0,0.02)'
          }}>
            <video 
              controls
              muted
              style={{ width: '100%', borderRadius: '15px', display: 'block' }}
              poster="/dataprocessing.png" // 影片縮圖
            >
              <source src="/dataprocessing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={{ fontSize: '13px', color: '#69696cff', marginTop: '10px', textAlign: 'center', fontWeight: '600' }}>
              Data Processing Website
            </div>
          </div>        
        </div>
      </div>

      {/* --- 台積電 --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',  marginBottom: '120px', alignItems: 'center' }}>
        {/* 左側照片區塊 (佔 5 格) */}
        <div style={{ 
          gridColumn: 'span 4',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* 懸浮照片卡片 */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px', 
            padding: '10px', 
            boxShadow: '10px 10px 10px rgba(2, 2, 2, 0.38)',
            border: '1px solid rgba(0,0,0,0.02)', 
            maxWidth: '360px',
            width: '100%'
          }}>
            <img 
              src="/tsmc1.JPG"
              alt="TSMC Optimization" 
              style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ fontSize: '13px', color: '#69696cff', marginTop: '10px', textAlign: 'center', fontWeight: '600' }}>
              TSMC 實習生活照
            </div>
          </div>
        </div>

        {/* 右側文字內容 (佔 7 格) */}
        <div style={{ 
          gridColumn: '6 / span 7',
          paddingLeft: '20px'
         }}>
          <h2 style={{ fontFamily: 'Noto Sans TC', fontSize: '36px', fontWeight: '900', lineHeight: '1.3', marginBottom: '24px', color: '#1D1D1F' }}>
            自動化派工邏輯優化：<br /><span style={{ color: '#9656a1' }}>解決爐管機台 Idle 瓶頸</span>
          </h2>
          <div style={{ fontSize: '18px', lineHeight: '1.9', color: '#424245', marginBottom: '40px', fontFamily: 'Noto Sans TC' }}>
            <p>
              <strong>需求識別：</strong>
              非線性貨量成長導致每日需人為介入執行 Idle Test Run 以確保品質，
              原流程需耗時每日需人工逐一確認頻寬需求，人工判斷往往忽略 Flow-in WIP (未來抵達貨量)，
              恐錯失最佳派工時機，造成 Cycle Time 增加與產能損失。
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { 
                label: "演算法邏輯優化", 
                content: "將 Idle T/R 需求納入 LDS (批貨派工系統) 演算法中，取代主觀的人為判斷。" 
              },
              { 
                label: "動態排程規劃", 
                content: "利用系統預測未來 WIP 流量，在有限時間內算出最佳派貨順序，追求 Cycle Time 最小化。" 
              }
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '4px solid #33272a', paddingLeft: '20px' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', color: '#1D1D1F', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#33272a' }} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
            {['SQL', 'Big Data Analysis', 'Algorithm Optimization'].map(tag => (
              <span key={tag} style={{ padding: '6px 14px', backgroundColor: '#cfbed2ff', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* --- SHOPLINE --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', marginBottom: '120px', alignItems: 'center' }}>       
        {/* 左側文字內容 (佔 8 格) */}
        <div style={{ gridColumn: 'span 8' }}>
          <h2 style={{ fontFamily: 'Noto Sans TC', fontSize: '36px', fontWeight: '900', lineHeight: '1.3', marginBottom: '24px', color: '#1D1D1F' }}>
            主動式客戶成功策略：<span style={{ color: '#9656a1' }}>數據導向的留存率優化</span>
          </h2>

          <div style={{ fontSize: '18px', lineHeight: '1.9', color: '#424245', marginBottom: '40px', fontFamily: 'Noto Sans TC' }}>
            <p>
              為提升網店開通後的留存率，我負責從後台數據中分析「欲轉換店家」的營運特性。
              我先抓取開通店家的相關數值，並手動觀察店家的實際經營狀況，試圖找出流失前的關鍵行為指標。
              透過觀察發現，店家若長時間未登入後台，其不續約風險將大幅增加，需針對不同經營階段提供精準干預。
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { 
                label: "流失特性分析", 
                content: "使用<span style='color:#9656a1; font-weight:900'> Excel (Pivot Table, Vlookup)</span> 分析營運數據，識別出「登入頻率」與「續約傾向」的正相關性，主動提供商業洞察報告，協助客戶優化網店運營，成功提升<span style='color:#9656a1; font-weight:900'> 3% 客戶留存率</span>。" 
              },
              { 
                label: "主動式策略執行", 
                content: "針對預警名單執行電話關懷、提供產品行銷建議與實戰課程，引導客戶啟用網店關鍵功能，</br>成功帶動<span style='color:#9656a1; font-weight:900'>產品啟用率 YOY 成長 20%</span>。" 
              }
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '4px solid #33272a', paddingLeft: '20px' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', color: '#1D1D1F', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#33272a' }} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
            {['Customer Success', 'Excel Data Analysis', 'Churn Prediction', 'Product Feedback Loop'].map(tag => (
              <span key={tag} style={{ padding: '6px 14px', backgroundColor: '#cfbed2ff', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* 右側：照片區塊 (佔 4 格) */}
        <div style={{ 
          gridColumn: 'span 4', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginLeft: 'auto'
        }}>
          {/* 懸浮照片卡片 */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px', 
            padding: '10px', 
            boxShadow: '10px 10px 10px rgba(2, 2, 2, 0.38)', 
            border: '1px solid rgba(0,0,0,0.02)', 
            maxWidth: '320px', 
            width: '100%',
            transition: 'transform 0.3s ease'
          }}>
            <img 
              src="/shopline.JPG"
              alt="Experience Photo" 
              style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ fontSize: '13px', color: '#69696cff', marginTop: '10px', textAlign: 'center', fontWeight: '600' }}>
              SHOPLINE 實習生活照
            </div>
          </div>
        </div>

      </div>

      {/* --- BenQ --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',  marginBottom: '120px', alignItems: 'center' }}>
        {/* 左側：IG 貼文預覽區塊 (佔 4 格) */}
        <div style={{ 
          gridColumn: 'span 4', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          {/* 點擊可導向貼文連結 */}
          <a 
            href="https://www.instagram.com/p/CrAqYswrlnh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', width: '100%', maxWidth: '360px' }}
          >
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px', 
              padding: '10px', 
              boxShadow: '10px 10px 10px rgba(2, 2, 2, 0.38)', 
              border: '1px solid rgba(0,0,0,0.02)', 
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* 放入貼文的封面截圖 */}
              <img 
                src="/benq1.jpg" 
                alt="Instagram Post Preview" 
                style={{ width: '100%', borderRadius: '10px', display: 'block' }} 
              />
              
              <div style={{ 
                fontSize: '13px', color: '#69696cff',marginTop: '12px', textAlign: 'center', fontWeight: '900',
                display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '5px'
              }}>
                <span>點擊查看原始貼文</span>
              </div>
            </div>
          </a>
        </div>

        {/* 右側文字內容 (佔 7 格) */}
        <div style={{ 
          gridColumn: '6 / span 7',
          paddingLeft: '20px' 
         }}>
          <h2 style={{ fontFamily: 'Noto Sans TC', fontSize: '36px', fontWeight: '900', lineHeight: '1.3', marginBottom: '24px', color: '#1D1D1F' }}>
            BenQ 數位行銷：：<br /><span style={{ color: '#9656a1' }}>螢幕掛燈的社群滲透與精準策略</span>
          </h2>
          <div style={{ fontSize: '18px', lineHeight: '1.9', color: '#424245', marginBottom: '40px', fontFamily: 'Noto Sans TC' }}>
            <p>
              針對台灣與美國市場（英語區）進行競品聲量分析，識別出不同文化背景下的用戶痛點與購買動機，找出尚未被充分開發的利基市場。
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { 
                label: "英語區市場經營", 
                content: "主導美國市場數位行銷提案，透過<span style='color:#9656a1; font-weight:900'> A/B Testing </span>調整英語文案與視覺策略，提升品牌在海外社群的互動率。" 
              },
              { 
                label: "精準投放與素材優化", 
                content: "分析品牌與競品聲量，搭配 GA 數據分析，有效將廣告連結點擊成效提升<span style='color:#9656a1; font-weight:900'> 2 倍</span>。" 
              },
              { 
                label: "異業合作開發", 
                content: "主動開發燈具異業合作，爭取台北及高雄新光三越總價值超過<span style='color:#9656a1; font-weight:900'> 40 萬元</span>的宣傳版面贊助。" 
              }
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '4px solid #33272a', paddingLeft: '20px' }}>
                <div style={{ fontSize: '15px', fontWeight: '900', color: '#1D1D1F', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</div>
                <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#33272a' }} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
            {['Persona Analysis', 'A/B Testing', 'Marketing', 'Business Development'].map(tag => (
              <span key={tag} style={{ padding: '6px 14px', backgroundColor: '#cfbed2ff', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div> 
          
    </section>
  );
};

// 聯繫與頁尾
const Contact = () => {
  const [copyStatus, setCopyStatus] = useState('Email Me →');
  const myEmail = "cindywang891130@egmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(myEmail).then(() => {
      setCopyStatus('Copied！');
      setTimeout(() => setCopyStatus('Email Me →'), 2000); // 恢復原狀
    });
  };

  return (
    <footer section id="contact" style={{ 
      backgroundColor: '#1a111c',
      padding: '180px 10% 35px 10%', 
      color: '#ffffff',
      fontFamily: 'Inter, Noto Sans TC, sans-serif'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(12, 1fr)', 
        gap: '40px',
        alignItems: 'start'
      }}>
        
        {/* 左側：大標題 */}
        <div style={{ gridColumn: 'span 8' }}>
          <h2 style={{ 
            fontSize: '72px', 
            fontWeight: '900', 
            lineHeight: '1.1', 
            margin: '0 0 40px 0',
            letterSpacing: '-0.03em'
          }}>
            Have a data challenge?<br />
            <span style={{ color: '#b8c1ec' }}>Let's solve it with AI.</span>
          </h2>
          
          <p style={{ 
            fontSize: '18px', 
            color: '#a0a0a5', 
            maxWidth: '750px', 
            lineHeight: '2.0',
            marginBottom: '60px'
          }}>
            目前正積極尋求 2026 資料分析 (Data Analysis) 或 專案經理 (Project Manager) 相關職位。<br/>
            如果您正在尋找具備數據洞察力與產品思維的夥伴，歡迎隨時聯繫，讓我們開啟對話。
          </p>
        </div>

        {/* 右側：連結 */}
        <div style={{ 
          gridColumn: 'span 4', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          paddingTop: '20px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'right' }}>
            
            {/* Email 按鈕 */}
            <a 
              href="#"
              onClick={handleCopy}
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: copyStatus === 'Copied！' ? '#9656a1' : '#ffffff',
                textDecoration: 'none',
                borderBottom: '2px solid #9656a1',
                paddingBottom: '8px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#9656a1'}
              onMouseLeave={(e) => {
                if(copyStatus !== 'Copied！') e.currentTarget.style.color = '#ffffff';
              }}
            >
              {copyStatus}
            </a>

            {/* 社群連結清單 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { 
                  label: 'LinkedIn', 
                  url: 'https://www.linkedin.com/in/cindy1130/',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                },
                { 
                  label: 'Instagram', 
                  url: 'https://instagram.com/exam_kingg/',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                },
                { 
                  label: 'View Resume', 
                  url: 'https://drive.google.com/file/d/14dpSv3DSUQTgLVy-Py7n8M6oJpbv8rNq/view?usp=sharing',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#b8c1ec',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '12px',
                    lineHeight: '1'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateX(-5px)'; // 輕微向左移動
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#b8c1ec';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ color: '#b8c1ec' }}>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- 底部標註 --- */}
      <div style={{ 
        marginTop: '100px',
        paddingTop: '20px', 
        borderTop: '2px solid rgba(255,255,255,0.1)', 
        marginLeft: '-11.1%',
        marginRight: '-11.1%', 
        paddingLeft: '11.1%',  
        paddingRight: '11.1%',       
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '15px',
        color: '#6e6e73'
      }}>
        <div>© 2026 Designed & Developed by SHU CHUN WANG</div>
        <div style={{ letterSpacing: '0.1em' }}>連接數據與決策，從這裡開始。</div>
      </div>
    </footer>
  );
};

// 主頁面組件 (App)
function App() {
  return (
    <div style={{ backgroundColor: '#fbfbf9', minHeight: '100vh',  fontFamily: 'sans-serif' }}>
      <Navbar />
      <Hero />     
      <About />
      <Internship_Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;