import { AlertTriangle, Pill, Info, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const DrugInfoCard = ({ drugInfo }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto glass-card animate-scale-in">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Pill className="h-4 w-4" />
              </div>
              {drugInfo.name}
            </CardTitle>
            {drugInfo.genericName && (
              <p className="text-muted-foreground">
                Generic: <span className="font-medium">{drugInfo.genericName}</span>
              </p>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            {drugInfo.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Uses Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Info className="h-5 w-5" />
            Medical Uses
          </h3>
          <div className="grid gap-2">
            {drugInfo.uses.map((use, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">{use}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dosage Section */}
        {drugInfo.dosage && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Typical Dosage
            </h3>
            <div className="p-4 rounded-lg bg-accent/30 border border-border">
              <p className="text-sm">{drugInfo.dosage}</p>
            </div>
          </div>
        )}

        {/* Side Effects Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Common Side Effects
          </h3>
          <div className="grid gap-2">
            {drugInfo.sideEffects.map((effect, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/30"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-sm">{effect}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warnings Section */}
        {drugInfo.warnings && drugInfo.warnings.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Important Warnings
            </h3>
            <div className="space-y-2">
              {drugInfo.warnings.map((warning, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30"
                >
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">{warning}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            This information is for educational purposes only. Always consult with a healthcare professional before starting, stopping, or changing any medication.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
