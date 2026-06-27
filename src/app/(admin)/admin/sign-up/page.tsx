import { SignUpCard } from "@/features/auth/components/sign-up-card";

const SignUpPage = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-7.25rem)] items-start justify-center overflow-hidden border-x border-b border-black bg-[#f4f4f0] px-6 py-8 md:py-12">
      <SignUpCard />
    </section>
  );
};

export default SignUpPage;
