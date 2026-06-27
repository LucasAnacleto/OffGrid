import { SignInCard } from "@/features/auth/components/sign-in-card";

const SignInPage = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-7.25rem)] items-start justify-center overflow-hidden border-x border-b border-black bg-[#f4f4f0] px-6 py-8 md:py-12">
      <SignInCard />
    </section>
  );
};

export default SignInPage;
