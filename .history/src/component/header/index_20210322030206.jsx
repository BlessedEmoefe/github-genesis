import React,{use} from 'react';
import { HeaderStyles } from "./styles";

const Header = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, []);
  return (
    <HeaderStyles>
      Hello World
        <div className="headerTitle">
          <h1>My GitHub Genesis</h1>
        </div>
        <div className="about">
          <p>My very first Git Push</p>
        </div>
        <div className="timer">
          <b>
            Genesis Push: {timer} <span>Hours Ago</span>
          </b>
        </div>
    </HeaderStyles>
  );
}

export default Header;
