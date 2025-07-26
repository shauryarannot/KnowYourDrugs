import { useState, useEffect } from "react";
import { ArrowRight, Shield, Search, Zap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Search by drug name or upload images of medication packaging for instant identification"
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "Access reliable, medically-reviewed information about medications, dosages, and side effects"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive drug information in seconds with our fast, intuitive interface"
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Designed for patients, caregivers, and healthcare professionals seeking quick drug information"
    }
  ];

  const benefits = [
    "Comprehensive drug database",
    "Image recognition technology",
    "Side effects and interactions",
    "Dosage guidelines",
    "Safety warnings",
    "Mobile-friendly design"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header isDark={isDark} toggleDark={toggleDark} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 pt-32">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Know Your
              <span className="text-primary block md:inline"> Medications</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Get instant, reliable information about any medication. Search by name or upload an image 
              for comprehensive drug details, side effects, and safety guidelines.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <Link to="/search" preload="true">
                  Start Searching
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift">
                <Link to="/login">
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose KnowYourDrugs?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets medical expertise to deliver the information you need.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <Card key={title} className="glass-card hover-glow animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Everything you need to know about your medications
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our comprehensive database provides detailed information to help you make informed decisions about your health.
              </p>
              <div className="mt-8 grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8 hover-lift">
                <Link to="/search" preload="true">
                  Try it now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-fade-in">
              <Card className="glass-card p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Search: "Aspirin"</span>
                  </div>
                  <div className="pl-5 space-y-2 text-sm text-muted-foreground">
                    <p>• Pain relief and fever reduction</p>
                    <p>• Anti-inflammatory properties</p>
                    <p>• Heart attack prevention (low-dose)</p>
                    <p>• Common side effects: stomach irritation</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <div className="mx-auto max-w-2xl animate-scale-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to learn about your medications?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Join thousands of users who trust KnowYourDrugs for reliable medication information.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="hover-lift">
                <Link to="/search" preload="true">
                  Start Searching Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/signup">
                  Create Account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
