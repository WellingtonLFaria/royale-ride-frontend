import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/(tabs)/login');
    }, 0);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}