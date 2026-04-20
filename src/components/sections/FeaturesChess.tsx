import { ArrowUpRight } from 'lucide-react'

import feature1Gif from '@/assets/feature-1.gif'
import feature2Gif from '@/assets/feature-2.gif'

const features = [
  {
    title: 'Designed to convert. Built to perform.',
    body: 'Every pixel is intentional. Our AI studies what works across thousands of top sites — then builds yours to outperform them all.',
    cta: 'Learn more',
    gif: feature1Gif,
    reversed: false,
  },
  {
    title: 'It gets smarter. Automatically.',
    body: 'Your site evolves on its own. AI monitors every click, scroll, and conversion — then optimizes in real time. No manual updates. Ever.',
    cta: 'See how it works',
    gif: feature2Gif,
    reversed: true,
  },
] as const

export default function FeaturesChess() {
  return (
    <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Capabilities
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mt-6">
          Pro features. Zero complexity.
        </h2>
      </div>

      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={[
            'flex flex-col gap-12 lg:gap-20',
            feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
            index < features.length - 1 ? 'mb-24' : '',
          ].join(' ')}
        >
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.9] mb-4">
              {feature.title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm md:text-base mb-8 max-w-md">
              {feature.body}
            </p>
            <button
              type="button"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body text-sm font-medium flex items-center gap-2"
            >
              {feature.cta}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden">
              <img
                src={feature.gif}
                alt={feature.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
