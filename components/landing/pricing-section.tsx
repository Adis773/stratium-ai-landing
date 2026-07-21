"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Zap, Download, Leaf } from "lucide-react";
import { useLanguage } from "@/components/landing/language-provider";

export function PricingSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const plans = t.pricing.plans;
  const free = t.pricing.free;

  return (
    <section id="pricing" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Dramatic offset */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-12 h-px bg-foreground/30" />
              {t.pricing.eyebrow}
            </span>
            <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {t.pricing.title1}
              <br />
              <span className="text-stroke">{t.pricing.title2}</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 relative p-0 h-96 lg:h-auto">
            {/* Tree/whale image */}
            <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              <img
                src="/images/whale.png"
                alt="Stratium growth"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Pricing cards - Horizontal layout with overlap */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-0">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-background border transition-all duration-700 ${
                  plan.highlight 
                    ? "border-foreground lg:-mx-2 lg:z-10 lg:scale-105" 
                    : "border-foreground/10 lg:first:-mr-2 lg:last:-ml-2"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-8 right-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                      <Zap className="w-3 h-3" />
                      {t.pricing.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  {/* Plan header */}
                  <div className="mb-8 pb-8 border-b border-foreground/10">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-display mt-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl lg:text-6xl font-display">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{t.pricing.perMonth}</span>
                    </div>
                  </div>

                  {/* Autonomy highlight */}
                  <div className="mb-8 inline-flex items-center gap-2 px-3 py-2 border border-[#eca8d6]/30 bg-[#eca8d6]/5 text-[#eca8d6] text-sm">
                    <Leaf className="w-4 h-4 shrink-0" />
                    {plan.autonomy}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                      plan.highlight
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free plan - full width */}
        <div
          className={`mt-4 lg:mt-6 relative border border-foreground/15 bg-foreground/[0.02] transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-10">
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-2xl lg:text-3xl font-display">{free.name}</h3>
                  <span className="text-3xl lg:text-4xl font-display">{free.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{free.description}</p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 border border-[#eca8d6]/30 bg-[#eca8d6]/5 text-[#eca8d6] text-sm w-fit">
                <Leaf className="w-4 h-4 shrink-0" />
                {free.autonomy}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {free.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="shrink-0 inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-sm font-medium hover:bg-foreground/90 transition-all group">
                <Download className="w-4 h-4" />
                {free.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom note with icons */}
        <div className={`mt-16 flex flex-wrap gap-6 text-sm text-muted-foreground pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {t.pricing.bottomNotes.map((note) => (
            <span key={note} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#eca8d6]" />
              {note}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1.5px currentColor;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
