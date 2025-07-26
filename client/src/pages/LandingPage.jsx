import { useState, useEffect } from "react";
import { ArrowRight, Shield, Search, Zap, Users, CheckCircle, Award, Heart, Star } from "lucide-react";
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
      description: "Search by drug name or upload images of medication packaging for instant identification",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "Access reliable, medically-reviewed information about medications, dosages, and side effects",
      gradient: "from-green-500/10 to-emerald-500/5",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive drug information in seconds with our fast, intuitive interface",
      gradient: "from-amber-500/10 to-orange-500/5",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Designed for patients, caregivers, and healthcare professionals seeking quick drug information",
      gradient: "from-purple-500/10 to-pink-500/5",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  const benefits = [
    "Comprehensive drug database with 50,000+ medications",
    "Advanced image recognition technology",
    "Drug interactions and side effects warnings",
    "Personalized dosage guidelines",
    "Real-time safety alerts and recalls",
    "Mobile-optimized for on-the-go access"
  ];

  const stats = [
    { icon: Users, value: "100K+", label: "Active Users" },
    { icon: Award, value: "50K+", label: "Medications" },
    { icon: Heart, value: "99.9%", label: "Accuracy Rate" },
    { icon: Star, value: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <Header isDark={isDark} toggleDark={toggleDark} />

      <section className="relative overflow-hidden pt-40 pb-32 md:pt-48 md:pb-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/3 to-primary/1 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-muted/20 to-muted/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl mb-8 animate-fade-in">
              <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                Know Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Drugs
              </span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
              Get instant, reliable information about any medication. Search by name or upload an image
              for comprehensive drug details, side effects, and safety guidelines.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '500ms' }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 h-14 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/search">
                  Start Searching Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-border hover:bg-muted/50 px-12 py-6 h-14 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                <Link to="/Login">
                  Login
                </Link>
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '700ms' }}>
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/3 to-transparent"></div>
        <div className="container relative">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 text-foreground">
              Why Choose KnowYourDrugs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced technology meets medical expertise to deliver the information you need,
              when you need it most.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description, gradient, iconColor }, index) => (
              <Card
                key={title}
                className="glass-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in group border-border/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${gradient} backdrop-blur-sm border border-border/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="animate-slide-up order-2 lg:order-1">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-8 text-foreground">
                Everything you need to know about your medications
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Our comprehensive database provides detailed, medically-reviewed information
                to help you make informed decisions about your health and well-being.
              </p>
              <div className="grid gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:bg-card/80 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/search">
                  Start Your Search
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-in order-1 lg:order-2">
              <Card className="glass-card shadow-2xl border-border/30 p-10">
                <CardContent className="p-0">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20">
                      <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-semibold text-lg text-foreground">Search: "Aspirin"</span>
                    </div>
                    <div className="pl-8 space-y-4 text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Pain relief and fever reduction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <span>Anti-inflammatory properties</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>Heart attack prevention (low-dose)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        <span>Side effects: stomach irritation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span>Interactions: blood thinners</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-muted/15 via-transparent to-accent/10"></div>
        <div className="container relative text-center">
          <div className="mx-auto max-w-5xl">
            <div className="glass-card p-16 rounded-3xl border-border/20 shadow-2xl animate-scale-in">
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl mb-8 text-foreground">
                Ready to learn about your medications?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                Join thousands of users who trust KnowYourDrugs for reliable,
                comprehensive medication information.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 h-14 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/search">
                    Start Searching Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border hover:bg-muted/50 text-foreground hover:text-foreground px-12 py-6 h-14 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/signup">
                    Create Free Account
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;