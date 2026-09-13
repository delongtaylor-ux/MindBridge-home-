import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Check,
  HeartHandshake,
  Home,
  Info,
  Mic,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

type Message = { role: 'assistant' | 'user'; text: string; tool?: string };
type Scenario = 'overwhelmed' | 'grounding' | 'checkin' | 'support' | 'urgent';

const scenarios: Record<
  Scenario,
  { label: string; prompt: string; reply: string; tool: string }
> = {
  overwhelmed: {
    label: 'I feel overwhelmed',
    prompt: 'I have too much to do and I do not know where to start.',
    reply:
      'Let’s make this smaller. Choose one task that matters today, give it just 10 minutes, and pause after that. What is the smallest useful first step you could take?',
    tool: 'create_action_plan',
  },
  grounding: {
    label: 'Guide me through grounding',
    prompt: 'Help me feel grounded.',
    reply:
      'Place both feet on the floor. Notice 5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell, and 1 you can taste. Breathe slowly while you look around.',
    tool: 'grounding_exercise',
  },
  checkin: {
    label: 'Start a wellness check-in',
    prompt: 'I would like to check in.',
    reply:
      'On a scale from 1 to 5, how intense does your stress feel right now? This is a wellness reflection—not a clinical assessment.',
    tool: 'daily_check_in',
  },
  support: {
    label: 'Find support resources',
    prompt: 'I want help finding support.',
    reply:
      'I can help you consider a trusted person, a licensed professional, a local service, or a crisis resource. For a demo, choose the kind of support you would like to explore.',
    tool: 'find_support_resource',
  },
  urgent: {
    label: 'Show safety escalation',
    prompt: 'I might hurt myself.',
    reply:
      'I’m glad you spoke up. This needs immediate human support. In the U.S., call or text 988 now. If danger is immediate, call 911 or go to the nearest emergency department. If you can, stay with a trusted person.',
    tool: 'escalate_support',
  },
};

function App() {
  const [active, setActive] = useState<'demo' | 'about'>('demo');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Hi, I’m MindBridge Home. I can help with a brief check-in, grounding, an action plan, or finding human support.',
    },
  ]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);

  const toolCount = useMemo(
    () => messages.filter(message => message.tool).length,
    [messages]
  );

  const runScenario = (key: Scenario) => {
    const item = scenarios[key];
    setMessages(current => [
      ...current,
      { role: 'user', text: item.prompt },
      { role: 'assistant', text: item.reply, tool: item.tool },
    ]);
    setInput('');
    setListening(false);
  };

  const sendInput = () => {
    const value = input.trim();
    if (!value) return;
    const lower = value.toLowerCase();
    let key: Scenario = 'overwhelmed';
    if (/hurt myself|suicide|kill myself|immediate danger/.test(lower))
      key = 'urgent';
    else if (/ground|panic|calm|breathe/.test(lower)) key = 'grounding';
    else if (/resource|therapist|support|counselor/.test(lower))
      key = 'support';
    else if (/check.?in|stress level|mood/.test(lower)) key = 'checkin';
    const item = scenarios[key];
    setMessages(current => [
      ...current,
      { role: 'user', text: value },
      { role: 'assistant', text: item.reply, tool: item.tool },
    ]);
    setInput('');
  };

  const reset = () => {
    setMessages([
      {
        role: 'assistant',
        text: 'Hi, I’m MindBridge Home. I can help with a brief check-in, grounding, an action plan, or finding human support.',
      },
    ]);
    setInput('');
  };

  return (
    <main className="min-h-screen">
      <header className="topbar">
        <a className="brand" href="#" aria-label="MindBridge Home">
          <span className="brandmark">
            <BrainCircuit size={24} />
          </span>
          <span>
            <strong>MindBridge</strong>
            <small>HOME</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <button
            className={active === 'demo' ? 'nav-active' : ''}
            onClick={() => setActive('demo')}
          >
            <Home size={16} /> Live demo
          </button>
          <button
            className={active === 'about' ? 'nav-active' : ''}
            onClick={() => setActive('about')}
          >
            <Info size={16} /> How it works
          </button>
        </nav>
        <span className="prototype">
          <span /> Interactive prototype
        </span>
      </header>

      {active === 'demo' ? (
        <div className="page-grid">
          <section className="intro">
            <div className="eyebrow">
              <Sparkles size={15} /> Wellness support, within reach
            </div>
            <h1>
              A calmer next step,
              <br />
              <em>right at home.</em>
            </h1>
            <p>
              Explore an Alexa+-style experience designed to help people pause,
              organize, and connect with the right human support.
            </p>
            <div className="trust-row">
              <span>
                <ShieldCheck size={17} /> Non-diagnostic
              </span>
              <span>
                <HeartHandshake size={17} /> Human-centered
              </span>
            </div>
            <div className="notice">
              <ShieldCheck size={19} />
              <div>
                <strong>Designed with clear boundaries</strong>
                <p>
                  MindBridge Home does not diagnose, treat, or replace
                  professional care. Demo responses are preconfigured.
                </p>
              </div>
            </div>
          </section>

          <section
            className="device-wrap"
            aria-label="Interactive MindBridge Home demo"
          >
            <div className="glow" />
            <div className="device">
              <div className="device-top">
                <div>
                  <span className="online" /> MindBridge Home
                </div>
                <button onClick={reset} aria-label="Reset conversation">
                  <RotateCcw size={17} />
                </button>
              </div>
              <div className="conversation" aria-live="polite">
                {messages.map((message, index) => (
                  <div className={'message ' + message.role} key={index}>
                    {message.role === 'assistant' && (
                      <span className="mini-logo">
                        <BrainCircuit size={14} />
                      </span>
                    )}
                    <div>
                      <p>{message.text}</p>
                      {message.tool && (
                        <span className="tool">
                          <Check size={12} /> MCP tool · {message.tool}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="suggestions">
                {(Object.keys(scenarios) as Scenario[]).map(key => (
                  <button key={key} onClick={() => runScenario(key)}>
                    {scenarios[key].label}
                    <ArrowRight size={14} />
                  </button>
                ))}
              </div>
              <div className="composer">
                <button
                  className={listening ? 'mic listening' : 'mic'}
                  onClick={() => setListening(!listening)}
                  aria-label="Simulate voice input"
                >
                  <Mic size={19} />
                </button>
                <input
                  value={input}
                  onChange={event => setInput(event.target.value)}
                  onKeyDown={event => event.key === 'Enter' && sendInput()}
                  placeholder={
                    listening
                      ? 'Listening… type to simulate speech'
                      : 'Type or choose a demo prompt'
                  }
                />
                <button className="send" onClick={sendInput}>
                  Send
                </button>
              </div>
              <div className="device-foot">
                <span>
                  {toolCount} structured tool{' '}
                  {toolCount === 1 ? 'call' : 'calls'}
                </span>
                <span>Demo mode</span>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <section className="about-page">
          <div className="eyebrow">
            <BrainCircuit size={15} /> Purpose-built for responsible support
          </div>
          <h1>
            Conversation is the interface.
            <br />
            <em>Safety is the architecture.</em>
          </h1>
          <p className="lede">
            MindBridge Home is a non-diagnostic wellness and support-navigation
            concept for Alexa+. Natural conversation selects narrowly scoped
            tools with predictable behavior.
          </p>
          <div className="architecture">
            <article>
              <span>01</span>
              <h2>Speak naturally</h2>
              <p>
                A user describes stress, asks for grounding, or requests help
                finding support.
              </p>
            </article>
            <article>
              <span>02</span>
              <h2>Route intentionally</h2>
              <p>
                The experience maps intent to a defined MCP tool rather than
                unrestricted conversation.
              </p>
            </article>
            <article>
              <span>03</span>
              <h2>Take the next step</h2>
              <p>
                The user receives a concise exercise, plan, resource path, or
                safety escalation.
              </p>
            </article>
          </div>
          <div className="safety-card">
            <Phone size={26} />
            <div>
              <h2>Need immediate help?</h2>
              <p>
                In the United States, call or text <strong>988</strong>. If
                someone is in immediate danger, call <strong>911</strong>.
              </p>
            </div>
          </div>
          <button className="primary" onClick={() => setActive('demo')}>
            Try the guided demo <ArrowRight size={17} />
          </button>
        </section>
      )}

      <footer>
        <span>MindBridge Home · Hackathon prototype</span>
        <span>Privacy-minded · Evidence-informed · Human-first</span>
      </footer>
    </main>
  );
}

export default App;
