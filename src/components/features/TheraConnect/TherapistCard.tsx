
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Check } from "lucide-react";

interface Therapist {
  id: string;
  name: string;
  description: string | null;
  address: string;
  city: string;
  latitude: number | null;
  longitude: number | null;
  verified: boolean | null;
}

interface TherapistCardProps {
  therapist: Therapist;
}

const TherapistCard = ({ therapist }: TherapistCardProps) => {
  return (
    <Card className="mindshift-card overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-mindshift-raspberry flex items-center">
              {therapist.name}
              {therapist.verified && (
                <Check size={16} className="ml-2 text-green-600" />
              )}
            </h3>
            <p className="text-gray-600 mt-1">{therapist.description || "Professional Therapist"}</p>
          </div>
          <Avatar className="h-12 w-12 bg-mindshift-light text-mindshift-raspberry">
            <AvatarFallback>{therapist.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex items-center text-gray-700 mt-4">
          <MapPin className="h-4 w-4 mr-2 text-mindshift-raspberry" />
          <span>
            {therapist.address}
            <span className="font-medium ml-1">({therapist.city})</span>
          </span>
        </div>
        
        {therapist.verified && (
          <Badge className="mt-3 bg-green-100 text-green-800 hover:bg-green-100">
            Verified Professional
          </Badge>
        )}
        
        <div className="mt-4 pt-4 border-t flex justify-end">
          <Button className="mindshift-button">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TherapistCard;
