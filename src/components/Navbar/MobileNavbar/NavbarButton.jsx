import { useEffect, useState } from "react";

const area = 48;

const Burger = ({
  color = "currentColor",
  direction = "left",
  distance = "md",
  duration = 0.4,
  easing = "cubic-bezier(0, 0, 0, 1)",
  hideOutline = true,
  label,
  lines = 3,
  onToggle,
  render,
  rounded = false,
  size = 32,
  toggle,
  toggled,
  disabled = false,
  animateOnMount = false,
}) => {
  const [toggledInternal, toggleInternal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const width = Math.max(12, Math.min(area, size));
  const room = Math.round((area - width) / 2);

  const barHeightRaw = width / 12;
  const barHeight = Math.round(barHeightRaw);

  const space = distance === "lg" ? 0.25 : distance === "sm" ? 0.75 : 0.5;
  const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
  const margin = Math.round(marginRaw);

  const height = barHeight * lines + margin * (lines - 1);
  const topOffset = Math.round((area - height) / 2);

  const translate =
    lines === 3
      ? distance === "lg"
        ? 4.0425
        : distance === "sm"
        ? 5.1625
        : 4.6325
      : distance === "lg"
      ? 6.7875
      : distance === "sm"
      ? 8.4875
      : 7.6675;
  const deviation =
    (barHeightRaw - barHeight + (marginRaw - margin)) / (lines === 3 ? 1 : 2);
  const move = parseFloat((width / translate - deviation / (4 / 3)).toFixed(2));
  const time = Math.max(0, duration);

  const burgerStyles = {
    cursor: disabled ? "not-allowed" : "pointer",
    height: `${area}px`,
    position: "relative",
    transition: `${time}s ${easing}`,
    userSelect: "none",
    width: `${area}px`,
  };

  const barStyles = {
    background: color,
    height: `${barHeight}px`,
    left: `${room}px`,
    position: "absolute",
  };

  if (hideOutline) {
    burgerStyles["outline"] = "none";
  }

  if (rounded) {
    barStyles["borderRadius"] = "9em";
  }

  const getIsToggled = () => {
    const isToggled = toggled !== undefined ? toggled : toggledInternal;
    return animateOnMount && !mounted ? !isToggled : isToggled;
  };

  const toggleFunction = toggle || toggleInternal;
  const isToggled = getIsToggled();

  const handler = () => {
    toggleFunction(!isToggled);

    if (typeof onToggle === "function") onToggle(!isToggled);
  };

  return render({
    barHeight,
    barStyles,
    burgerStyles,
    easing,
    handler,
    isLeft: direction === "left",
    isToggled,
    label,
    margin,
    move,
    time,
    topOffset,
    width,
  });
};

export default function NavbarButton(props) {
  return (
    <Burger
      {...props}
      render={(o) => (
        <div
          className="z-20"
          aria-label={o.label}
          aria-expanded={o.isToggled}
          data-testid="turn"
          onClick={props.disabled ? undefined : o.handler}
          onKeyUp={
            props.disabled ? undefined : (e) => e.key === "Enter" && o.handler()
          }
          role="button"
          style={o.burgerStyles}
          tabIndex={0}
        >
          <div
            style={{
              ...o.barStyles,
              width: `${o.width}px`,
              top: `${o.topOffset}px`,
              transition: `${o.time}s ${o.easing}`,
              transform: `${
                o.isToggled
                  ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${
                      o.move * (o.isLeft ? -1 : 1)
                    }px, ${o.move}px)`
                  : "none"
              }`,
            }}
          />

          <div
            style={{
              ...o.barStyles,
              width: `${o.width}px`,
              top: `${o.topOffset + o.barHeight + o.margin}px`,
              transition: `${o.time / 2}s ${o.easing}`,
              transform: `${o.isToggled ? "scaleX(0)" : "none"}`,
            }}
          />

          <div
            style={{
              ...o.barStyles,
              width: `${o.width}px`,
              top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
              transition: `${o.time}s ${o.easing}`,
              transform: `${
                o.isToggled
                  ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${
                      o.move * (o.isLeft ? -1 : 1)
                    }px, ${o.move * -1}px)`
                  : "none"
              }`,
            }}
          />
        </div>
      )}
    />
  );
}
