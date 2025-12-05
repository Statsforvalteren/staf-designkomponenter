import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useReducer, useRef, useId, useCallback, useEffect, useMemo, useContext, useState } from "react";
import { Alert } from "@digdir/designsystemet-react";
const ToastContext = createContext(void 0);
function toastReducer(state, action) {
  switch (action.type) {
    case "ADD_TOAST":
      if (state.some((toast) => toast.id === action.payload.id)) {
        return state;
      }
      return [action.payload, ...state];
    case "REMOVE_TOAST":
      return state.filter((toast) => toast.id !== action.payload);
    default:
      return state;
  }
}
function ToastProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, []);
  const timeoutsRef = useRef(/* @__PURE__ */ new Map());
  const id = useId();
  const removeToast = useCallback((id2) => {
    const timeout = timeoutsRef.current.get(id2);
    if (timeout) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id2);
    }
    dispatch({ type: "REMOVE_TOAST", payload: id2 });
  }, []);
  const addToast = useCallback(
    (message, options = {}) => {
      const {
        type = "success",
        position = "top",
        duration = 5e3
      } = options;
      const toast = {
        id,
        message,
        type,
        position,
        duration
      };
      dispatch({ type: "ADD_TOAST", payload: toast });
      const timeout = setTimeout(() => {
        removeToast(id);
      }, duration);
      timeoutsRef.current.set(id, timeout);
    },
    [removeToast]
  );
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current.clear();
    };
  }, []);
  const value = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast
    }),
    [toasts, addToast, removeToast]
  );
  return /* @__PURE__ */ jsx(ToastContext.Provider, { value, children });
}
function useToast() {
  const context = useContext(ToastContext);
  if (context === void 0) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
const toastContainer = "_toastContainer_14wvi_1";
const toastItem = "_toastItem_14wvi_30";
const exiting = "_exiting_14wvi_40";
const toastContent = "_toastContent_14wvi_68";
const toastMessage = "_toastMessage_14wvi_76";
const closeButton = "_closeButton_14wvi_84";
const styles$1 = {
  toastContainer,
  toastItem,
  exiting,
  toastContent,
  toastMessage,
  closeButton
};
function ToastItem({ toast, onClose }) {
  const [isExiting, setIsExiting] = useState(false);
  function handleClose() {
    setIsExiting(true);
    setTimeout(() => {
      onClose(toast.id);
    }, 250);
  }
  return /* @__PURE__ */ jsx(
    Alert,
    {
      "data-color": toast.type,
      role: "alert",
      className: `${styles$1.toastItem} ${isExiting ? styles$1.exiting : ""}`,
      children: /* @__PURE__ */ jsxs("div", { className: styles$1.toastContent, children: [
        /* @__PURE__ */ jsx("span", { className: styles$1.toastMessage, children: toast.message }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleClose,
            className: styles$1.closeButton,
            "aria-label": "Lukk varsel",
            type: "button",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                focusable: "false",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.53033 5.46967C6.23744 5.17677 5.76256 5.17677 5.46967 5.46967C5.17678 5.76256 5.17678 6.23743 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033C18.8232 6.23743 18.8232 5.76256 18.5303 5.46967C18.2374 5.17677 17.7626 5.17677 17.4697 5.46967L12 10.9393L6.53033 5.46967Z",
                    fill: "currentColor"
                  }
                )
              }
            )
          }
        )
      ] })
    }
  );
}
function ToastContainerSection({ position, toasts, onRemove }) {
  const positionToasts = toasts.filter((toast) => toast.position === position);
  if (positionToasts.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: styles$1.toastContainer, "data-position": position, children: positionToasts.map((toast) => /* @__PURE__ */ jsx(ToastItem, { toast, onClose: onRemove }, toast.id)) });
}
function ToastContainer() {
  const { toasts, removeToast } = useToast();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ToastContainerSection, { position: "top", toasts, onRemove: removeToast }),
    /* @__PURE__ */ jsx(ToastContainerSection, { position: "center", toasts, onRemove: removeToast }),
    /* @__PURE__ */ jsx(ToastContainerSection, { position: "bottom", toasts, onRemove: removeToast })
  ] });
}
const stepperContainer = "_stepperContainer_161op_1";
const stepperContainerInline = "_stepperContainerInline_161op_6";
const steps = "_steps_161op_11";
const stepsVertical = "_stepsVertical_161op_15";
const step = "_step_161op_1";
const iconContainer = "_iconContainer_161op_24";
const active = "_active_161op_41";
const completed = "_completed_161op_48";
const stepNumber = "_stepNumber_161op_55";
const stepTitle = "_stepTitle_161op_61";
const line = "_line_161op_68";
const lineVertical = "_lineVertical_161op_76";
const content = "_content_161op_83";
const contentInline = "_contentInline_161op_86";
const styles = {
  stepperContainer,
  stepperContainerInline,
  steps,
  stepsVertical,
  step,
  iconContainer,
  active,
  completed,
  stepNumber,
  stepTitle,
  line,
  lineVertical,
  content,
  contentInline
};
function Stepper({
  steps: steps2,
  activeStep,
  completedSteps = [],
  vertical = false,
  showSteps = true,
  onStepChange
}) {
  const ContainerClass = vertical ? styles.stepperContainerInline : styles.stepperContainer;
  const StepsClass = vertical ? styles.stepsVertical : styles.steps;
  const ContentClass = vertical ? styles.contentInline : styles.content;
  const handleActivate = (index) => {
    onStepChange?.(index);
  };
  const ActiveComp = steps2[activeStep]?.component;
  const ActiveProps = steps2[activeStep]?.props ?? {};
  return /* @__PURE__ */ jsxs("div", { className: ContainerClass, children: [
    showSteps && /* @__PURE__ */ jsx("div", { className: StepsClass, role: "tablist", children: steps2.map((step2, index) => {
      const isActive = index === activeStep;
      const isCompleted = completedSteps.includes(index);
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles.step,
          role: "tab",
          "aria-selected": isActive,
          "aria-controls": `panel-${index}`,
          tabIndex: 0,
          onClick: () => handleActivate(index),
          onKeyUp: (e) => {
            if (e.key === "Enter") handleActivate(index);
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${styles.iconContainer} ${isCompleted ? styles.completed : isActive ? styles.active : ""}`,
                children: isCompleted ? /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "✓" }) : /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `${styles.stepNumber} ${isActive ? styles.active : ""}`,
                    children: index + 1
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles.stepTitle, id: `step-title-${index}`, children: step2.title }),
            index < steps2.length - 1 && !vertical && /* @__PURE__ */ jsx("div", { className: styles.line }),
            index < steps2.length - 1 && vertical && /* @__PURE__ */ jsx("div", { className: styles.lineVertical })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: ContentClass, children: ActiveComp && /* @__PURE__ */ jsx(
      "div",
      {
        role: "tabpanel",
        id: `panel-${activeStep}`,
        "aria-labelledby": `step-title-${activeStep}`,
        children: /* @__PURE__ */ jsx(ActiveComp, { ...ActiveProps })
      }
    ) })
  ] });
}
export {
  Stepper,
  ToastContainer,
  ToastProvider,
  useToast
};
