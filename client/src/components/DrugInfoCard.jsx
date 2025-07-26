import { AlertTriangle, Pill, Info, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const DrugInfoCard = ({ drugInfo }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-scale-in">
      {/* Header Card */}
      <Card className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl dark:bg-black/20 dark:border-white/10">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <Pill className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{drugInfo.name}</h1>
                {drugInfo.genericName && (
                  <p className="text-lg text-muted-foreground">
                    {drugInfo.genericName}
                  </p>
                )}
              </div>
            </div>
            <Badge 
              variant="secondary" 
              className="bg-white/30 backdrop-blur-sm border border-white/20 text-sm px-4 py-2 dark:bg-black/20 dark:border-white/10"
            >
              {drugInfo.category}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Uses */}
        <Card className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl dark:bg-black/20 dark:border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold">Uses</h2>
            </div>
            <div className="space-y-3">
              {drugInfo.uses.map((use, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 dark:bg-black/20 dark:border-white/10">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{use}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dosage */}
        {drugInfo.dosage && (
          <Card className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl dark:bg-black/20 dark:border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold">Dosage</h2>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <p className="text-sm leading-relaxed font-medium">{drugInfo.dosage}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Side Effects */}
        <Card className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl dark:bg-black/20 dark:border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold">Side Effects</h2>
            </div>
            <div className="space-y-2">
              {drugInfo.sideEffects.map((effect, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{effect}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Warnings */}
        {drugInfo.warnings && drugInfo.warnings.length > 0 && (
          <Card className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl dark:bg-black/20 dark:border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold">Warnings</h2>
              </div>
              <div className="space-y-3">
                {drugInfo.warnings.map((warning, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/20">
                    <p className="text-sm font-medium leading-relaxed">{warning}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Disclaimer */}
      <Card className="bg-white/30 backdrop-blur-sm border border-white/20 shadow-lg dark:bg-black/20 dark:border-white/10">
        <CardContent className="p-6 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            ⚠️ This information is for educational purposes only. Always consult with a healthcare professional before starting, stopping, or changing any medication.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
