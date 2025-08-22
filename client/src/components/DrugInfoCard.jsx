import { AlertTriangle, Pill, Info, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const DrugInfoCard = ({ drugInfo }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 animate-scale-in">
      {/* Header Card */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg dark:bg-black/10 dark:border-white/10">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/10">
                <Pill className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold mb-1">{drugInfo.name}</h1>
                {drugInfo.genericName && (
                  <p className="text-sm text-muted-foreground">
                    {drugInfo.genericName}
                  </p>
                )}
              </div>
            </div>
            <Badge 
              variant="secondary" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-xs px-3 py-1 dark:bg-black/10"
            >
              {drugInfo.category}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Content Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Uses */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg dark:bg-black/10 dark:border-white/10">
          <CardContent className="p-5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Info className="h-4 w-4 text-blue-600" />
              </div>
              <h2 className="text-lg font-medium">Uses</h2>
            </div>
            <div className="space-y-2">
              {drugInfo.uses.map((use, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 dark:bg-black/5">
                  <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{use}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dosage */}
        {drugInfo.dosage && (
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg dark:bg-black/10 dark:border-white/10">
            <CardContent className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-purple-600" />
                </div>
                <h2 className="text-lg font-medium">Dosage</h2>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                <p className="text-sm leading-relaxed">{drugInfo.dosage}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Side Effects */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg dark:bg-black/10 dark:border-white/10">
          <CardContent className="p-5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
              </div>
              <h2 className="text-lg font-medium">Side Effects</h2>
            </div>
            <div className="space-y-2">
              {drugInfo.sideEffects.map((effect, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/10">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{effect}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Warnings */}
        {drugInfo.warnings && drugInfo.warnings.length > 0 && (
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg dark:bg-black/10 dark:border-white/10">
            <CardContent className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <h2 className="text-lg font-medium">Warnings</h2>
              </div>
              <div className="space-y-2">
                {drugInfo.warnings.map((warning, index) => (
                  <div key={index} className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                    <p className="text-sm leading-relaxed">{warning}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
