import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Play, Pause, CheckCircle, BookOpen, 
  BarChart3, TrendingUp, AlertTriangle, Target, Zap, 
  Download, Home, Clock, User
} from 'lucide-react';

// Comprehensive lesson content data
const lessonContent = {
  "1": {
    "1": {
      title: "Market Structure & Psychology",
      duration: "25 min",
      videoUrl: "https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg",
      content: {
        introduction: "Understanding market structure and psychology is the foundation of successful swing trading. The market is driven by human emotions and institutional behavior, creating predictable patterns that we can exploit.",
        keyPoints: [
          "Markets move in trends, and the trend is your friend until it ends",
          "Institutional money moves markets - follow the smart money",
          "Fear and greed drive most market participants' decisions",
          "Volume confirms price action and reveals institutional activity"
        ],
        detailedContent: `
          <h3>The Psychology of Market Participants</h3>
          <p>The stock market is essentially a battlefield between buyers and sellers, where emotions often override logic. Understanding this psychological warfare is crucial for swing traders.</p>
          
          <h4>Key Market Participants:</h4>
          <ul>
            <li><strong>Retail Investors:</strong> Individual traders who often buy high and sell low due to emotional decision-making</li>
            <li><strong>Institutional Investors:</strong> Mutual funds, pension funds, and banks that move large amounts of money systematically</li>
            <li><strong>Hedge Funds:</strong> Professional money managers who use sophisticated strategies and can move markets</li>
            <li><strong>Market Makers:</strong> Provide liquidity and profit from the bid-ask spread</li>
          </ul>

          <h4>The Emotional Cycle:</h4>
          <p>Markets follow predictable emotional cycles:</p>
          <ol>
            <li><strong>Accumulation:</strong> Smart money quietly buys while retail is pessimistic</li>
            <li><strong>Mark-up:</strong> Prices rise as more investors notice the trend</li>
            <li><strong>Distribution:</strong> Smart money sells to enthusiastic retail investors</li>
            <li><strong>Mark-down:</strong> Prices fall as reality sets in</li>
          </ol>

          <h3>Reading Market Structure</h3>
          <p>Market structure tells us who is in control - buyers or sellers. Look for:</p>
          <ul>
            <li><strong>Higher Highs & Higher Lows:</strong> Bullish trend structure</li>
            <li><strong>Lower Highs & Lower Lows:</strong> Bearish trend structure</li>
            <li><strong>Sideways Movement:</strong> Consolidation or accumulation/distribution</li>
          </ul>

          <h4>Volume Analysis Basics:</h4>
          <p>Volume is the fuel that drives price movements:</p>
          <ul>
            <li>Rising prices on increasing volume = Healthy uptrend</li>
            <li>Rising prices on decreasing volume = Potential weakness</li>
            <li>Falling prices on high volume = Strong selling pressure</li>
            <li>Falling prices on low volume = Lack of conviction</li>
          </ul>
        `,
        practicalApplication: "Start observing daily charts of major indices (SPY, QQQ, IWM) and note how they react at key support and resistance levels. Pay attention to volume during these reactions.",
        keyTakeaways: [
          "Markets are driven by human psychology and institutional behavior",
          "Follow the smart money, not the crowd",
          "Volume confirms price action - always analyze them together",
          "Understanding market structure helps identify trend changes early"
        ]
      }
    },
    "2": {
      title: "Understanding Price Action",
      duration: "30 min",
      videoUrl: "https://images.unsplash.com/photo-1553639558-fb2e565066f5",
      content: {
        introduction: "Price action is the language of the market. By learning to read candlestick patterns and price movements, you can understand what the market is telling you without relying on lagging indicators.",
        keyPoints: [
          "Candlesticks reveal the battle between buyers and sellers",
          "Support and resistance levels are key decision points",
          "Price action patterns repeat due to human psychology",
          "Context is everything when interpreting price action"
        ],
        detailedContent: `
          <h3>Candlestick Fundamentals</h3>
          <p>Each candlestick tells a story about the trading session:</p>
          
          <h4>Anatomy of a Candlestick:</h4>
          <ul>
            <li><strong>Open:</strong> First price of the session</li>
            <li><strong>High:</strong> Highest price reached</li>
            <li><strong>Low:</strong> Lowest price reached</li>
            <li><strong>Close:</strong> Final price of the session</li>
            <li><strong>Body:</strong> Distance between open and close</li>
            <li><strong>Wicks/Shadows:</strong> Lines extending from the body</li>
          </ul>

          <h4>Key Candlestick Patterns:</h4>
          
          <h5>Bullish Patterns:</h5>
          <ul>
            <li><strong>Hammer:</strong> Small body with long lower wick - rejection of lower prices</li>
            <li><strong>Bullish Engulfing:</strong> Large green candle engulfs previous red candle</li>
            <li><strong>Morning Star:</strong> Three-candle reversal pattern</li>
            <li><strong>Doji at Support:</strong> Indecision at key level often leads to bounce</li>
          </ul>

          <h5>Bearish Patterns:</h5>
          <ul>
            <li><strong>Shooting Star:</strong> Small body with long upper wick - rejection of higher prices</li>
            <li><strong>Bearish Engulfing:</strong> Large red candle engulfs previous green candle</li>
            <li><strong>Evening Star:</strong> Three-candle reversal pattern</li>
            <li><strong>Doji at Resistance:</strong> Indecision at key level often leads to decline</li>
          </ul>

          <h3>Support and Resistance</h3>
          <p>These are the most important levels on any chart:</p>
          
          <h4>Types of Support/Resistance:</h4>
          <ul>
            <li><strong>Horizontal Levels:</strong> Previous highs and lows</li>
            <li><strong>Trendlines:</strong> Diagonal lines connecting swing points</li>
            <li><strong>Moving Averages:</strong> Dynamic support/resistance</li>
            <li><strong>Psychological Levels:</strong> Round numbers (e.g., $50, $100)</li>
            <li><strong>Fibonacci Levels:</strong> Mathematical retracement levels</li>
          </ul>

          <h4>How Support/Resistance Works:</h4>
          <ol>
            <li><strong>Memory:</strong> Traders remember significant price levels</li>
            <li><strong>Orders:</strong> Buy/sell orders cluster around key levels</li>
            <li><strong>Psychology:</strong> Round numbers attract attention</li>
            <li><strong>Institutions:</strong> Large players use these levels for entries/exits</li>
          </ol>

          <h3>Price Action Strategies</h3>
          
          <h4>Breakout Trading:</h4>
          <p>When price breaks through resistance with volume:</p>
          <ul>
            <li>Wait for the break and retest</li>
            <li>Enter on the bounce off the broken resistance (now support)</li>
            <li>Stop loss below the support level</li>
          </ul>

          <h4>Reversal Trading:</h4>
          <p>When price rejects support/resistance:</p>
          <ul>
            <li>Look for reversal candlestick patterns</li>
            <li>Enter on confirmation (next candle)</li>
            <li>Stop loss beyond the rejection point</li>
          </ul>
        `,
        practicalApplication: "Practice identifying support and resistance levels on your favorite stocks. Mark these levels and observe how price reacts when it reaches them.",
        keyTakeaways: [
          "Candlesticks reveal market sentiment and potential reversals",
          "Support and resistance levels are where key decisions are made",
          "Price action patterns repeat due to human psychology",
          "Always wait for confirmation before entering trades"
        ]
      }
    }
  },
  "2": {
    "1": {
      title: "Introduction to SEPA",
      duration: "20 min",
      videoUrl: "https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg",
      content: {
        introduction: "Mark Minervini's SEPA (Specific Entry Point Analysis) strategy is designed to identify stocks in the early stages of major moves. This methodology focuses on finding strong stocks before they make explosive moves.",
        keyPoints: [
          "SEPA identifies stocks at inflection points",
          "Focus on stocks making new highs, not new lows",
          "Combine technical and fundamental analysis",
          "Risk management is paramount"
        ],
        detailedContent: `
          <h3>What is SEPA?</h3>
          <p>SEPA (Specific Entry Point Analysis) is Mark Minervini's systematic approach to identifying high-probability swing trading opportunities. The strategy focuses on finding stocks that are:</p>
          <ul>
            <li>In strong uptrends</li>
            <li>Breaking out of consolidation patterns</li>
            <li>Supported by strong fundamentals</li>
            <li>Showing institutional accumulation</li>
          </ul>

          <h3>The SEPA Methodology</h3>
          
          <h4>1. Trend Template</h4>
          <p>Minervini's Trend Template identifies stocks in Stage 2 uptrends:</p>
          <ul>
            <li>Stock is above 150-day and 200-day moving averages</li>
            <li>150-day MA is above 200-day MA</li>
            <li>200-day MA is trending upward for at least 1 month</li>
            <li>Stock is within 25% of 52-week high</li>
            <li>Stock is above 50-day moving average</li>
            <li>50-day MA is above 150-day and 200-day MAs</li>
          </ul>

          <h4>2. Fundamental Criteria</h4>
          <p>Strong fundamentals support sustainable moves:</p>
          <ul>
            <li><strong>Earnings Growth:</strong> 25%+ for last 2-3 quarters</li>
            <li><strong>Sales Growth:</strong> Accelerating revenue growth</li>
            <li><strong>ROE:</strong> Return on Equity of 17% or higher</li>
            <li><strong>Debt-to-Equity:</strong> Low debt levels</li>
            <li><strong>Institutional Ownership:</strong> Increasing institutional interest</li>
          </ul>

          <h4>3. Technical Setup</h4>
          <p>Look for specific chart patterns:</p>
          <ul>
            <li><strong>VCP (Volatility Contraction Pattern):</strong> Tightening price ranges</li>
            <li><strong>Cup and Handle:</strong> Classic accumulation pattern</li>
            <li><strong>Flat Base:</strong> Sideways consolidation</li>
            <li><strong>High Tight Flag:</strong> Brief pullback after big move</li>
          </ul>

          <h3>The Power of SEPA</h3>
          
          <h4>Why SEPA Works:</h4>
          <ol>
            <li><strong>Institutional Behavior:</strong> Follows how professional money managers operate</li>
            <li><strong>Risk Management:</strong> Built-in stop-loss levels</li>
            <li><strong>Asymmetric Risk/Reward:</strong> Small risk for large potential gains</li>
            <li><strong>Market Leadership:</strong> Focuses on strongest stocks in strongest sectors</li>
          </ol>

          <h4>SEPA vs. Other Strategies:</h4>
          <table>
            <tr>
              <td><strong>SEPA</strong></td>
              <td><strong>Buy and Hold</strong></td>
              <td><strong>Value Investing</strong></td>
            </tr>
            <tr>
              <td>Buys strength</td>
              <td>Buys and holds</td>
              <td>Buys weakness</td>
            </tr>
            <tr>
              <td>Active management</td>
              <td>Passive</td>
              <td>Long-term</td>
            </tr>
            <tr>
              <td>Growth stocks</td>
              <td>Index funds</td>
              <td>Undervalued stocks</td>
            </tr>
          </table>

          <h3>Getting Started with SEPA</h3>
          
          <h4>Tools You'll Need:</h4>
          <ul>
            <li>Charting software with moving averages</li>
            <li>Fundamental screening tools</li>
            <li>Volume analysis capabilities</li>
            <li>Alert systems for breakouts</li>
          </ul>

          <h4>Daily Routine:</h4>
          <ol>
            <li>Scan for stocks meeting Trend Template</li>
            <li>Apply fundamental filters</li>
            <li>Identify technical setups</li>
            <li>Create watchlist</li>
            <li>Monitor for entry signals</li>
          </ol>
        `,
        practicalApplication: "Start by screening for stocks that meet Minervini's Trend Template. Focus on stocks in strong sectors and note their chart patterns.",
        keyTakeaways: [
          "SEPA combines technical and fundamental analysis",
          "Focus on stocks making new highs in strong trends",
          "The Trend Template filters for the strongest stocks",
          "Proper setup identification is crucial for success"
        ]
      }
    },
    "2": {
      title: "Volatility Contraction Pattern (VCP)",
      duration: "35 min",
      videoUrl: "https://images.pexels.com/photos/7997398/pexels-photo-7997398.jpeg",
      content: {
        introduction: "The Volatility Contraction Pattern (VCP) is Mark Minervini's signature setup. It identifies stocks that are tightening up before explosive moves, similar to a coiled spring ready to release energy.",
        keyPoints: [
          "VCP shows decreasing volatility before breakouts",
          "Each pullback should be smaller than the previous",
          "Volume should dry up during contractions",
          "Breakouts should occur on increased volume"
        ],
        detailedContent: `
          <h3>Understanding the VCP</h3>
          <p>The Volatility Contraction Pattern represents the behavior of a stock as it prepares for a significant move. Think of it as a coiled spring - the tighter it gets, the more explosive the eventual move.</p>

          <h3>VCP Characteristics</h3>
          
          <h4>1. Series of Contractions</h4>
          <p>A VCP consists of multiple contractions, each smaller than the previous:</p>
          <ul>
            <li><strong>First Contraction:</strong> 12-15% pullback from high</li>
            <li><strong>Second Contraction:</strong> 8-12% pullback</li>
            <li><strong>Third Contraction:</strong> 4-8% pullback</li>
            <li><strong>Final Contraction:</strong> 1-4% pullback</li>
          </ul>

          <h4>2. Volume Patterns</h4>
          <p>Volume behavior is crucial in VCP identification:</p>
          <ul>
            <li><strong>During Pullbacks:</strong> Volume should decrease (selling dries up)</li>
            <li><strong>During Rallies:</strong> Volume should increase (buying interest)</li>
            <li><strong>At Breakout:</strong> Volume should surge (institutional buying)</li>
          </ul>

          <h4>3. Time Frame</h4>
          <p>VCPs can form over different time periods:</p>
          <ul>
            <li><strong>Short VCP:</strong> 3-6 weeks</li>
            <li><strong>Medium VCP:</strong> 6-12 weeks</li>
            <li><strong>Long VCP:</strong> 12+ weeks</li>
          </ul>

          <h3>Identifying Quality VCPs</h3>
          
          <h4>Stage 2 Base Requirements:</h4>
          <ol>
            <li>Stock must be in a Stage 2 uptrend</li>
            <li>Base should form after a 20%+ advance</li>
            <li>Base depth should not exceed 20-25%</li>
            <li>Each pullback should be shallower</li>
          </ol>

          <h4>Volume Confirmation:</h4>
          <ul>
            <li>Volume should contract on each pullback</li>
            <li>Volume should expand on rallies within the base</li>
            <li>Breakout volume should be 40-50% above average</li>
            <li>Look for "volume pockets" - areas of low volume</li>
          </ul>

          <h4>False Signals to Avoid:</h4>
          <ul>
            <li><strong>Wide and Loose:</strong> Pullbacks that are too deep</li>
            <li><strong>High Volume Declines:</strong> Heavy selling during contractions</li>
            <li><strong>Late-Stage Bases:</strong> VCPs after extended moves</li>
            <li><strong>Weak Market Context:</strong> VCPs in bear markets</li>
          </ul>

          <h3>Trading the VCP</h3>
          
          <h4>Entry Strategy:</h4>
          <ol>
            <li><strong>Identify the VCP:</strong> Confirm all characteristics</li>
            <li><strong>Mark Resistance:</strong> Draw line at prior high</li>
            <li><strong>Wait for Breakout:</strong> Price clears resistance with volume</li>
            <li><strong>Enter on Volume:</strong> Buy as volume surges above average</li>
          </ol>

          <h4>Position Sizing:</h4>
          <p>Risk management is crucial:</p>
          <ul>
            <li>Risk 1-2% of portfolio per trade</li>
            <li>Stop loss 7-8% below entry</li>
            <li>Position size = Risk Amount ÷ (Entry - Stop Loss)</li>
          </ul>

          <h4>Exit Strategy:</h4>
          <ul>
            <li><strong>Stop Loss:</strong> 7-8% below entry point</li>
            <li><strong>Profit Target:</strong> 20-25% gain (or more in strong markets)</li>
            <li><strong>Trailing Stop:</strong> Raise stop as stock advances</li>
            <li><strong>Volume Clues:</strong> Sell on high-volume reversals</li>
          </ul>

          <h3>VCP Examples and Case Studies</h3>
          
          <h4>Classic VCP Pattern:</h4>
          <p>Perfect VCP characteristics:</p>
          <ul>
            <li>3-4 contractions, each smaller than the previous</li>
            <li>Volume dries up on each pullback</li>
            <li>Breakout on 2x normal volume</li>
            <li>Stock advances 30%+ from breakout</li>
          </ul>

          <h4>Modified VCP:</h4>
          <p>Variations that still work:</p>
          <ul>
            <li>Only 2 contractions (in strong markets)</li>
            <li>Slightly deeper pullbacks (up to 30% in some cases)</li>
            <li>Longer formation periods</li>
          </ul>

          <h3>Market Context for VCPs</h3>
          
          <h4>Best Market Conditions:</h4>
          <ul>
            <li><strong>Bull Market:</strong> VCPs work best in uptrending markets</li>
            <li><strong>Low VIX:</strong> Low volatility environment favors breakouts</li>
            <li><strong>Sector Rotation:</strong> VCPs in leading sectors</li>
            <li><strong>Institutional Activity:</strong> High institutional buying</li>
          </ul>

          <h4>Warning Signs:</h4>
          <ul>
            <li>General market breaking down</li>
            <li>High VIX readings</li>
            <li>Sector underperformance</li>
            <li>Low overall market volume</li>
          </ul>
        `,
        practicalApplication: "Study 20 recent VCP examples on different stocks. Note the contraction patterns, volume behavior, and subsequent moves. Practice identifying VCPs in real-time.",
        keyTakeaways: [
          "VCPs show institutional accumulation through tightening price action",
          "Each contraction should be smaller than the previous one",
          "Volume should dry up during pullbacks and surge on breakouts",
          "Perfect VCPs can lead to 30%+ gains in a few months"
        ]
      }
    }
  },
  "3": {
    "1": {
      title: "Introduction to Stage Analysis",
      duration: "22 min",
      videoUrl: "https://images.unsplash.com/photo-1639768939489-025b90ba9f23",
      content: {
        introduction: "Stan Weinstein's Stage Analysis is one of the most powerful methods for timing market entries and exits. By understanding the four stages of stock price movement, you can align your trading with the natural rhythm of the markets.",
        keyPoints: [
          "Every stock goes through 4 distinct stages",
          "Stage 2 is where the big money is made",
          "Moving averages help identify stage transitions",
          "Volume confirms stage changes"
        ],
        detailedContent: `
          <h3>The Four Stages Explained</h3>
          <p>Stan Weinstein identified that all stocks move through four distinct stages in their price cycle. Understanding these stages helps you know when to buy, hold, and sell.</p>

          <h3>Stage 1: Accumulation (Basing Area)</h3>
          
          <h4>Characteristics:</h4>
          <ul>
            <li>Stock moves sideways after a decline</li>
            <li>30-week moving average (MA) flattens out</li>
            <li>Volume is typically low but may increase slightly</li>
            <li>Price oscillates around the moving average</li>
            <li>Duration: Can last months or even years</li>
          </ul>

          <h4>What's Happening:</h4>
          <p>Smart money is quietly accumulating shares while the stock is "under the radar." The previous downtrend has exhausted sellers, and buyers are starting to show interest.</p>

          <h4>Trading Strategy:</h4>
          <ul>
            <li><strong>Action:</strong> Watch and wait</li>
            <li><strong>Signal:</strong> Wait for breakout to Stage 2</li>
            <li><strong>Risk:</strong> Don't buy during Stage 1 - no momentum yet</li>
          </ul>

          <h3>Stage 2: Advancing (Uptrend)</h3>
          
          <h4>Characteristics:</h4>
          <ul>
            <li>Stock breaks above resistance with volume</li>
            <li>30-week MA turns upward</li>
            <li>Stock stays above the rising moving average</li>
            <li>Higher highs and higher lows pattern</li>
            <li>Volume increases on advances, decreases on pullbacks</li>
          </ul>

          <h4>What's Happening:</h4>
          <p>Institutional buying drives the stock higher. More investors notice the move and jump on board. This is where the big money is made.</p>

          <h4>Trading Strategy:</h4>
          <ul>
            <li><strong>Action:</strong> BUY aggressively</li>
            <li><strong>Entry:</strong> On breakout or pullback to MA</li>
            <li><strong>Hold:</strong> As long as stock stays above MA</li>
            <li><strong>Add:</strong> On pullbacks to support</li>
          </ul>

          <h3>Stage 3: Distribution (Top Area)</h3>
          
          <h4>Characteristics:</h4>
          <ul>
            <li>Stock moves sideways after significant advance</li>
            <li>30-week MA flattens out again</li>
            <li>Volume often high due to distribution</li>
            <li>Price volatility increases</li>
            <li>Multiple false breakouts and breakdowns</li>
          </ul>

          <h4>What's Happening:</h4>
          <p>Smart money starts selling to late-arriving retail investors. The stock loses momentum as supply meets demand.</p>

          <h4>Trading Strategy:</h4>
          <ul>
            <li><strong>Action:</strong> Start reducing positions</li>
            <li><strong>Warning:</strong> Avoid new purchases</li>
            <li><strong>Exit:</strong> Sell on any weakness</li>
          </ul>

          <h3>Stage 4: Declining (Downtrend)</h3>
          
          <h4>Characteristics:</h4>
          <ul>
            <li>Stock breaks below support with volume</li>
            <li>30-week MA turns downward</li>
            <li>Lower highs and lower lows pattern</li>
            <li>Stock stays below the declining moving average</li>
            <li>Any rallies are weak and short-lived</li>
          </ul>

          <h4>What's Happening:</h4>
          <p>Selling pressure overwhelms buying interest. The stock enters a bear market phase.</p>

          <h4>Trading Strategy:</h4>
          <ul>
            <li><strong>Action:</strong> AVOID completely</li>
            <li><strong>Short Selling:</strong> Advanced traders may short</li>
            <li><strong>Wait:</strong> For eventual Stage 1 base formation</li>
          </ul>

          <h3>Using Moving Averages</h3>
          
          <h4>The 30-Week Moving Average:</h4>
          <p>Weinstein's primary tool for stage identification:</p>
          <ul>
            <li><strong>Flat MA + sideways price = Stage 1 or 3</strong></li>
            <li><strong>Rising MA + price above = Stage 2</strong></li>
            <li><strong>Falling MA + price below = Stage 4</strong></li>
          </ul>

          <h4>Additional Moving Averages:</h4>
          <ul>
            <li><strong>10-week MA:</strong> Short-term trend direction</li>
            <li><strong>150-day MA:</strong> Intermediate trend (similar to 30-week)</li>
            <li><strong>200-day MA:</strong> Long-term trend</li>
          </ul>

          <h3>Volume Analysis in Stage Analysis</h3>
          
          <h4>Volume Patterns by Stage:</h4>
          <ul>
            <li><strong>Stage 1:</strong> Low volume, may increase toward end</li>
            <li><strong>Stage 2:</strong> High volume on advances, low on pullbacks</li>
            <li><strong>Stage 3:</strong> High volume due to distribution</li>
            <li><strong>Stage 4:</strong> High volume on declines</li>
          </ul>

          <h4>Volume Confirmation Rules:</h4>
          <ul>
            <li>Stage 2 breakouts need volume expansion</li>
            <li>Stage 2 pullbacks should have low volume</li>
            <li>Stage 4 breakdowns confirmed by volume</li>
            <li>Any stage transition should have volume confirmation</li>
          </ul>

          <h3>Practical Application</h3>
          
          <h4>Daily Routine:</h4>
          <ol>
            <li>Identify current market stage (use major indices)</li>
            <li>Scan for Stage 2 stocks if market is bullish</li>
            <li>Avoid Stage 4 stocks completely</li>
            <li>Watch Stage 1 stocks for potential breakouts</li>
            <li>Sell Stage 3 stocks from your portfolio</li>
          </ol>

          <h4>Sector Analysis:</h4>
          <p>Apply stage analysis to sectors as well:</p>
          <ul>
            <li>Buy stocks in Stage 2 sectors</li>
            <li>Avoid stocks in Stage 4 sectors</li>
            <li>Sector rotation often precedes individual stock moves</li>
          </ul>
        `,
        practicalApplication: "Analyze 10 different stocks and identify their current stage. Use weekly charts with a 30-week moving average. Note how the moving average slope corresponds to each stage.",
        keyTakeaways: [
          "Stage 2 is where significant profits are made",
          "The 30-week moving average is the key indicator",
          "Never fight the stage - align with the trend",
          "Volume confirms stage transitions"
        ]
      }
    }
  }
};

function LessonView() {
  const navigate = useNavigate();
  const { moduleId, lessonId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('content');

  const lesson = lessonContent[moduleId]?.[lessonId];

  useEffect(() => {
    if (!lesson) {
      navigate('/course');
      return;
    }
    
    // Simulate progress tracking
    const timer = setTimeout(() => {
      setProgress(100);
      setCompleted(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [lesson, navigate]);

  const handleVideoToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBackToCourse = () => {
    navigate('/course');
  };

  const handleNextLesson = () => {
    // Simple next lesson logic - in real app, this would be more sophisticated
    const nextLessonId = parseInt(lessonId) + 1;
    const nextModuleId = nextLessonId > 12 ? parseInt(moduleId) + 1 : moduleId;
    const finalLessonId = nextLessonId > 12 ? 1 : nextLessonId;
    
    if (lessonContent[nextModuleId]?.[finalLessonId]) {
      navigate(`/lesson/${nextModuleId}/${finalLessonId}`);
    }
  };

  const handlePrevLesson = () => {
    const prevLessonId = parseInt(lessonId) - 1;
    if (prevLessonId > 0 && lessonContent[moduleId]?.[prevLessonId]) {
      navigate(`/lesson/${moduleId}/${prevLessonId}`);
    }
  };

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Lesson Not Found</h2>
          <button
            onClick={handleBackToCourse}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Course
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToCourse}
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back to Course</span>
              </button>
              <div className="text-xl font-bold text-white">Module {moduleId} - Lesson {lessonId}</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{lesson.duration}</span>
              </div>
              {completed && (
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm">Completed</span>
                </div>
              )}
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lesson Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {lesson.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {lesson.content.introduction}
          </p>
          
          {/* Progress Bar */}
          <div className="bg-slate-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden mb-8 border border-blue-500/20"
            >
              <div className="relative aspect-video">
                <img
                  src={lesson.videoUrl}
                  alt={lesson.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                  <motion.button
                    onClick={handleVideoToggle}
                    className="bg-white/20 backdrop-blur-lg text-white p-6 rounded-full hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Content Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-blue-500/20 overflow-hidden"
            >
              {/* Tab Navigation */}
              <div className="flex border-b border-slate-700">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'content'
                      ? 'text-blue-400 bg-blue-900/30 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  Lesson Content
                </button>
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'summary'
                      ? 'text-blue-400 bg-blue-900/30 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Target className="w-5 h-5 inline mr-2" />
                  Key Points
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'content' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="prose prose-invert max-w-none"
                  >
                    <div 
                      className="text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: lesson.content.detailedContent }}
                    />
                  </motion.div>
                )}

                {activeTab === 'summary' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-blue-400" />
                        Key Points
                      </h3>
                      <ul className="space-y-3">
                        {lesson.content.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-yellow-400" />
                        Practical Application
                      </h4>
                      <p className="text-gray-300">{lesson.content.practicalApplication}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                        Key Takeaways
                      </h4>
                      <ul className="space-y-2">
                        {lesson.content.keyTakeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-blue-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Your Progress</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">{progress}%</div>
                <div className="text-gray-300 text-sm">Lesson Complete</div>
              </div>
              
              {completed ? (
                <div className="bg-emerald-900/30 border border-emerald-500/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Lesson Completed!</span>
                  </div>
                  <p className="text-emerald-300 text-sm">Great job! You've mastered this lesson.</p>
                </div>
              ) : (
                <div className="bg-blue-900/30 border border-blue-500/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Play className="w-5 h-5" />
                    <span className="font-semibold">In Progress</span>
                  </div>
                  <p className="text-blue-300 text-sm">Continue watching to complete this lesson.</p>
                </div>
              )}
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-blue-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Lesson Navigation</h3>
              <div className="space-y-3">
                <button
                  onClick={handlePrevLesson}
                  disabled={parseInt(lessonId) === 1}
                  className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous Lesson
                </button>
                
                <button
                  onClick={handleNextLesson}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Next Lesson
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-blue-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 text-left p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-semibold text-white">Lesson Notes</div>
                    <div className="text-gray-400 text-sm">PDF Download</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center gap-3 text-left p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Chart Examples</div>
                    <div className="text-gray-400 text-sm">Visual Guide</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center gap-3 text-left p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                  <Target className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="font-semibold text-white">Practice Exercise</div>
                    <div className="text-gray-400 text-sm">Apply What You Learned</div>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonView;