import { useState, useEffect } from "react";
import type { FallbackProps } from "react-error-boundary";

export const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const [showAdditionalMessage, setShowAdditionalMessage] = useState(false);

  useEffect(() => {
    if (error.message.match(/cannot estimate gas;/)) {
      setShowAdditionalMessage(true);
    }
  }, [error.message]);

  return (
    <>
      <h3 className="text-6xl text-center text-red-600">Error</h3>
      <p className="overflow-hidden max-w-full text-lg text-center text-red-700 line-clamp-5">
        {error.message}
      </p>
      {showAdditionalMessage && (
        <p className="overflow-hidden max-w-full text-lg text-center text-red-700 line-clamp-5">
          An internal error was detected, but MINT may have been
          successful.Please check your transaciton log
          内部エラーが発生しました。しかし、MINTはおそらく成功しています。
          MetaMaskやEtherscanでMINTトランザクションのログを確認してください。
        </p>
      )}
      {!showAdditionalMessage && (
        <button
          className="p-3 mt-8 text-3xl text-white border-2"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      )}
    </>
  );
};
