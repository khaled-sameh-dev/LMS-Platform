import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function ProfilePage() {
  return (
    <div className="w-full h-full flex justify-center items-center py-8">
      <UserProfile
        appearance={{
          baseTheme: dark,
          elements: {
            rootBox: "w-full",
            card: "bg-secondry-blue shadow-xl border border-white/10",
            navbar: "bg-primary-blue",
            navbarButton: "text-dirty-grey hover:text-white",
            navbarButtonActive: "text-white bg-accent",
            pageScrollBox: "bg-secondry-blue",
            formFieldInput: "bg-primary-blue border-white/10 text-white",
            formButtonPrimary: "bg-accent hover:bg-accent/80",
            footerActionLink: "text-accent hover:text-accent/80",
          },
        }}
      />
    </div>
  );
}
