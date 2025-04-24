
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import TheraConnect from "@/components/features/TheraConnect/TheraConnect";

// This is a wrapper component that uses the TheraConnect component
const TheraConnectPage = () => {
  return (
    <PageLayout className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-mindshift-raspberry mb-2">TheraConnect</h1>
        <p className="text-gray-600 mb-8">Find and connect with mental health professionals in your area</p>
        
        <TheraConnect />
      </div>
    </PageLayout>
  );
};

export default TheraConnectPage;
