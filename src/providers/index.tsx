import { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { useRouter } from "@/hooks/use-router";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

const ErrorFallback = ({ error }: FallbackProps) => {
  const router = useRouter();
  console.log("error", error);
  return (
    <div
      className="flex h-screen w-screen flex-col items-center  justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-2xl font-semibold">
        Ooops, something went wrong :({" "}
      </h2>
      <pre className="text-2xl font-bold">{error.message}</pre>
      <pre>{error.stack}</pre>
      <button className="mt-4" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  );
}
