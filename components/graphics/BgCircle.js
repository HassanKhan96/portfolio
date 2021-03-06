const BgCircle = () => {
  return (
    <svg id="visual" viewBox="0 0 900 600" className="h-full w-full">
      <g fill="none" stroke="#A256E7" stroke-width="2">
        <circle stroke-opacity="10%" r="84" cx="320" cy="348"></circle>
        <circle stroke-opacity="10%" r="36" cx="689" cy="87"></circle>
        <circle stroke-opacity="10%" r="39" cx="330" cy="95"></circle>
      </g>
      <g fill="#A256E7">
        <circle fill-opacity="10%" r="60" cx="95" cy="259"></circle>
        <circle fill-opacity="10%" r="40" cx="484" cy="160"></circle>
        <circle fill-opacity="10%" r="93" cx="91" cy="30"></circle>
        <circle fill-opacity="10%" r="37" cx="6" cy="585"></circle>
      </g>
    </svg>
  );
};

export default BgCircle;
