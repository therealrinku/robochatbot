import { Fragment, useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import useAppContext from "../../hooks/useAppContext";

export default function MessageBoxStyling() {
  const { chatbotConfig, setChatbotConfig } = useAppContext();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Fragment>
      <button
        className={`${!isExpanded && "border-b"} border-t px-5 py-2 flex items-center justify-between w-full`}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p className="font-bold">Message Box Styling</p>
        <LuChevronsUpDown size={16} />
      </button>

      {isExpanded && (
        <div className="border-b  pb-5 px-5 flex flex-col gap-5">
          <section className="flex gap-2 items-center">
            <label htmlFor="botMessageBgColor">Bot Message Bg Color</label>
            <input
              value={chatbotConfig.botMessageBgColor}
              onChange={(e) =>
                setChatbotConfig({
                  ...chatbotConfig,
                  botMessageBgColor: e.target.value,
                })
              }
              name="botMessageBgColor"
              className=" border outline-none p-1  bg-white"
              type="color"
            />
          </section>

          <section className="flex gap-2 items-center">
            <label htmlFor="botMessageTextColor">Bot Message Text Color</label>
            <input
              value={chatbotConfig.botMessageTextColor}
              onChange={(e) =>
                setChatbotConfig({
                  ...chatbotConfig,
                  botMessageTextColor: e.target.value,
                })
              }
              name="botMessageTextColor"
              className=" border outline-none p-1  bg-white"
              type="color"
            />
          </section>

          <section className="flex gap-2 items-center">
            <label htmlFor="userMessageBgColor">User Message Bg Color</label>
            <input
              value={chatbotConfig.userMessageBgColor}
              onChange={(e) =>
                setChatbotConfig({
                  ...chatbotConfig,
                  userMessageBgColor: e.target.value,
                })
              }
              name="userMessageBgColor"
              className=" border outline-none p-1  bg-white"
              type="color"
            />
          </section>

          <section className="flex gap-2 items-center">
            <label htmlFor="userMesssageTextColor">User Message Text Color</label>
            <input
              value={chatbotConfig.userMesssageTextColor}
              onChange={(e) =>
                setChatbotConfig({
                  ...chatbotConfig,
                  userMesssageTextColor: e.target.value,
                })
              }
              name="userMesssageTextColor"
              className=" border outline-none p-1  bg-white"
              type="color"
            />
          </section>
        </div>
      )}
    </Fragment>
  );
}