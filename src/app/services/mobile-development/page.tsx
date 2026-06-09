"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  Smartphone, CheckCircle, HelpCircle, Shield, Zap, Layers, 
  ArrowRight, Globe, Award, Settings, Database, RefreshCw, Cpu
} from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

const lifecycleSteps = [
  {
    step: "01",
    name: "Architectural Planning & Device Blueprinting",
    desc: "We analyze camera access needs, geolocation queries, local database security keys, background task sync rates, and API integration paths to produce a system blueprint."
  },
  {
    step: "02",
    name: "Thumb-Zone UI & Gesture Prototyping",
    desc: "We design native layouts optimized for thumb placement, dark mode displays, dynamic fonts, and tactile interactions, previewing flows in interactive Figma files."
  },
  {
    step: "03",
    name: "Native Sandbox Coding & Memory Auditing",
    desc: "We write React Native/Flutter modules, check memory allocations on test hardware to prevent battery drain, configure push endpoints, and run unit tests."
  },
  {
    step: "04",
    name: "Store Submissions & Fastlane pipelines",
    desc: "We build deployment pipelines using Fastlane, compile iOS/Android binaries, sign security credentials, and handle App Store review processes."
  }
];

const faqs = [
  {
    q: "Why should we build our application using cross-platform frameworks?",
    a: "Cross-platform frameworks (React Native, Flutter) run from a single codebase, reducing engineering and maintenance costs by up to 50% compared to maintaining separate iOS and Android projects. Modern setups compile to native code, delivering high performance and access to hardware APIs."
  },
  {
    q: "How does your offline synchronization system manage data conflicts?",
    a: "We implement conflict resolution workflows using vector clocks. When an offline device reconnects, transactions are verified sequentially. If a conflict occurs, the database applies deterministic resolution rules (such as 'most recent write wins') to reconcile states."
  },
  {
    q: "How do you protect stored credentials and user data on physical hardware?",
    a: "We encrypt local databases using SQLiteCipher (256-bit AES algorithms) and store encryption keys in hardware-backed keystores (iOS Keychain / Android Keystore). This isolates decryption keys from root-level access."
  },
  {
    q: "Can you update mobile application features without App Store reviews?",
    a: "Yes. Using Expo EAS Update or CodePush channels, we can push Javascript bundle modifications, CSS styling changes, and image assets over-the-air in seconds, though native module changes still require store review."
  }
];

export default function MobileDevelopmentPage() {
  useEffect(() => {
    document.title = "Mobile-First Application Development | Akshay Infotech";
  }, []);

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* 1. Bespoke Hero Section: Floating 3D Smartphone */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
                Mobile First Innovation
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Native Speeds & <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Hybrid Mobile Apps
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
                Akshay builds high-performance, responsive mobile applications for iOS and Android. By leveraging cross-platform frameworks and coding native module integrations, we deliver robust app performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with a Mobile Lead
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#roadmap"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950/50 rounded-xl transition-all"
                >
                  View App Lifecycle
                </a>
              </div>
            </div>

            {/* Simulated 3D Smartphone Container */}
            <div className="lg:col-span-5 flex justify-center relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[260px] h-[520px] bg-neutral-950 rounded-[48px] border-[10px] border-neutral-800 p-3 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Phone Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-5 bg-neutral-800 rounded-full z-20 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 block mr-2"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 block"></span>
                </div>

                {/* Phone Screen Mockup Content */}
                <div className="flex-grow pt-8 flex flex-col justify-between h-full font-mono text-[10px] text-neutral-400 space-y-4">
                  <div className="bg-neutral-900/60 p-3 rounded-2xl border border-neutral-800/80">
                    <div className="text-[9px] text-primary font-bold uppercase tracking-wider mb-1">Akshay Mobile App</div>
                    <div className="text-white text-xs font-bold">User Dashboard</div>
                  </div>
                  
                  <div className="flex-grow bg-neutral-950 rounded-2xl border border-neutral-850 p-3 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2 w-16 bg-neutral-800 rounded"></div>
                      <div className="h-2 w-28 bg-neutral-900 rounded"></div>
                      <div className="h-2 w-20 bg-neutral-900 rounded"></div>
                    </div>
                    <div className="h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-lg border border-primary/20 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary animate-pulse" />
                    </div>
                  </div>

                  <div className="bg-neutral-900/60 p-3 rounded-2xl border border-neutral-800/80 flex justify-between items-center text-[8px] text-neutral-500">
                    <span>Active Session: 99.9%</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Platform Engineering Sections (iOS & Android & Cross-Platform) */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* iOS Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">iOS Engineering</span>
              <h3 className="text-2xl font-bold text-white">Objective Swift Mobile Architectures</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We develop fast iOS applications using Swift and Kotlin, integrating native modules to access hardware tools like cameras, Bluetooth connectivity, and local storage caches. Our setups prioritize security configurations, utilizing secure storage options to protect credentials.
              </p>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Swift UI view structures</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Secure local hardware credential storage</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Xcode compile pipelines</li>
              </ul>
            </div>
            
            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-neutral-800 pb-2">iOS Keychain Service</h4>
              <pre className="text-[10px] text-emerald-400 font-mono overflow-x-auto p-4 bg-neutral-950 rounded-xl">
{`let query: [CFString: Any] = [
  kSecClass: kSecClassGenericPassword,
  kSecAttrAccount: "userSessionKey",
  kSecValueData: secretData,
  kSecAttrAccessible: kSecAttrAccessibleAfterFirstUnlock
]
SecItemAdd(query as CFDictionary, nil)`}
              </pre>
            </div>
          </div>

          {/* Android Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Android Engineering</span>
              <h3 className="text-2xl font-bold text-white">Kotlin & Jetpack Compose Layouts</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Our Android engineers build scalable applications using Jetpack Compose, managing thread tasks dynamically to preserve processor runtime. We design applications to work offline, utilizing SQLite database frameworks.
              </p>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Jetpack Compose UI rendering</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Android Keystore security rules</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" /> Local SQLite database sync frameworks</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-neutral-900 p-8 rounded-3xl border border-neutral-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-neutral-800 pb-2">Android Keystore Config</h4>
              <pre className="text-[10px] text-cyan-400 font-mono overflow-x-auto p-4 bg-neutral-950 rounded-xl">
{`val keyGenParameterSpec = KeyGenParameterSpec.Builder(
    "master_key",
    KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT
).setBlockModes(KeyProperties.BLOCK_MODE_GCM)
 .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
 .build()`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Unique Section: Device Compatibility Matrix */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Compatibility Matrix
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Native Hardware API Access Grid
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2">
              Compare native hardware support across hybrid and native development models.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-800 rounded-2xl bg-neutral-950/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-neutral-800 text-left text-xs sm:text-sm">
              <thead className="bg-neutral-950 text-neutral-400">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Features</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Native iOS (Swift)</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Native Android (Kotlin)</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">React Native (Expo)</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Flutter Core</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Biometric Login Auth</td>
                  <td className="px-6 py-4">FaceID API (Direct)</td>
                  <td className="px-6 py-4">BiometricPrompt (Direct)</td>
                  <td className="px-6 py-4 text-emerald-400">Expo LocalAuthentication</td>
                  <td className="px-6 py-4 text-emerald-400">local_auth package</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Offline Database Engine</td>
                  <td className="px-6 py-4">SQLite / CoreData</td>
                  <td className="px-6 py-4">SQLite / Room DB</td>
                  <td className="px-6 py-4">SQLiteCipher / Realm</td>
                  <td className="px-6 py-4">sqflite / Hive DB</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Background Sync Schedulers</td>
                  <td className="px-6 py-4">BGTaskScheduler</td>
                  <td className="px-6 py-4">WorkManager</td>
                  <td className="px-6 py-4 text-amber-500">TaskRegister bridges</td>
                  <td className="px-6 py-4 text-amber-500">Workmanager wrapper</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">BLE Peripheral Operations</td>
                  <td className="px-6 py-4">CoreBluetooth (Native)</td>
                  <td className="px-6 py-4">android.bluetooth (Native)</td>
                  <td className="px-6 py-4">react-native-ble-plx</td>
                  <td className="px-6 py-4">flutter_blue_plus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Unique Section: App Lifecycle & Roadmap */}
      <section id="roadmap" className="py-24 bg-neutral-950 border-t border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Workflow Lifecycle
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Bespoke Mobile Development Phase Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {lifecycleSteps.map((step, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl relative space-y-4">
                <div className="text-xs font-black text-neutral-700 absolute top-3 right-4 font-mono select-none tracking-widest uppercase">
                  Step {step.step}
                </div>
                <h4 className="text-sm font-bold text-white pt-4">{step.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Value Metrics</span>
            <h2 className="text-3xl font-extrabold text-white">Performance Outputs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-neutral-800 bg-neutral-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">60fps</div>
              <h4 className="font-bold text-white text-sm">Scroll Refresh Speed</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                By optimizing processing tasks, we ensure smooth application interactions.
              </p>
            </div>
            
            <div className="border border-neutral-800 bg-neutral-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">256-bit</div>
              <h4 className="font-bold text-white text-sm">Database Encryption</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All local database files are encrypted to protect sensitive customer records.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">0ms</div>
              <h4 className="font-bold text-white text-sm">Offline Interaction Latency</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Data operations update local caches instantly, synchronizing when reconnected.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950/20 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-primary">-50%</div>
              <h4 className="font-bold text-white text-sm">Development Time Saved</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Writing cross-platform apps speeds up releases on iOS and Android platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} iconColor="text-primary" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-neutral-950 py-20 border-t border-neutral-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build a High-Performance Mobile Application?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Discuss application layouts, offline databases, and secure hardware integrations with our native developers today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-all shadow-md group"
            >
              Get In Touch
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
