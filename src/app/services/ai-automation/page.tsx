"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  Cpu, CheckCircle, HelpCircle, Shield, Zap, Layers, 
  ArrowRight, Globe, Award, Settings, Database, RefreshCw, BarChart
} from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

const trainingStages = [
  {
    phase: "Step 01",
    title: "Data cleaning & Feature Engineering",
    desc: "We parse raw business records, balance database classes, isolate feature correlations, and remove anomalous elements to structure datasets for model training."
  },
  {
    phase: "Step 02",
    title: "Model training & Hyperparameter Selection",
    desc: "We train model candidates on high-compute GPU networks, tuning parameters, learning rates, and layers to reduce error rates."
  },
  {
    phase: "Step 03",
    title: "System validation & Safety checks",
    desc: "We evaluate model behaviors against test datasets to prevent bias, run security validation checks, and verify model parameters."
  },
  {
    phase: "Step 04",
    title: "Edge Server Deployment",
    desc: "We package model weights into containerized API microservices, set up cloud caching systems, and optimize response latency for user devices."
  }
];

const faqs = [
  {
    q: "What is the difference between supervised learning and generative models?",
    a: "Supervised models analyze input data to predict outcomes (such as categorizing text or forecasting numbers). Generative models (like large language models) process patterns in source materials to create new content."
  },
  {
    q: "How does Akshay protect company data when training custom language models?",
    a: "We train language models inside isolated virtual private cloud (VPC) networks. Customer datasets are not sent to public APIs, ensuring private IP remains secure."
  },
  {
    q: "What hardware platforms do you use to run machine learning models?",
    a: "We run model training on high-performance GPU networks (like NVIDIA H100 or A100 clusters) and package final weights into containerized formats for edge deployment."
  },
  {
    q: "How do you verify machine learning models are producing accurate results?",
    a: "We audit model outputs against validation datasets, tracking evaluation metrics (such as F1 score, precision, recall, and loss functions) to ensure reliable performance."
  }
];

export default function AIMachineLearningPage() {
  useEffect(() => {
    document.title = "AI & Machine Learning Engineering | Akshay Infotech";
  }, []);

  return (
    <div className="bg-slate-950 text-indigo-100 min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* 1. Bespoke Hero Section: AI Brain Network Visualization */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-indigo-950/60 bg-gradient-to-b from-slate-950 to-indigo-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Artificial Intelligence
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Neural Networks & <br />
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Generative AI Systems
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Akshay engineers customized machine learning systems. By training private model weights and deploying high-performance classification endpoints, we build intelligent business solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  Consult with an AI Engineer
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#training"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-400 hover:text-white border border-indigo-900 hover:border-indigo-850 bg-indigo-950/50 rounded-xl transition-all"
                >
                  View Workflow Pipeline
                </a>
              </div>
            </div>

            {/* Custom AI Brain Synaptic SVG Drawing */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-[340px] aspect-square bg-slate-950 rounded-3xl border border-indigo-900 p-6 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full stroke-indigo-900 fill-none" viewBox="0 0 100 100">
                  {/* Left Brain Hemisphere Nodes */}
                  <circle cx="35" cy="30" r="4" stroke="#818cf8" strokeWidth="1" />
                  <circle cx="25" cy="50" r="4" stroke="#818cf8" strokeWidth="1" />
                  <circle cx="35" cy="70" r="4" stroke="#818cf8" strokeWidth="1" />

                  {/* Right Brain Hemisphere Nodes */}
                  <circle cx="65" cy="30" r="4" stroke="#c084fc" strokeWidth="1" />
                  <circle cx="75" cy="50" r="4" stroke="#c084fc" strokeWidth="1" />
                  <circle cx="65" cy="70" r="4" stroke="#c084fc" strokeWidth="1" />

                  {/* Central Processing Node */}
                  <circle cx="50" cy="50" r="6" stroke="#2563eb" strokeWidth="1.5" className="animate-pulse" />

                  {/* Neural Synapse Pathways */}
                  <path d="M 35 30 L 50 50 M 25 50 L 50 50 M 35 70 L 50 50" strokeWidth="0.5" />
                  <path d="M 65 30 L 50 50 M 75 50 L 50 50 M 65 70 L 50 50" strokeWidth="0.5" />

                  {/* Synapse Pulses */}
                  <motion.circle r={2} fill="#818cf8" animate={{ x: [35, 50], y: [30, 50] }} transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }} />
                  <motion.circle r={2} fill="#c084fc" animate={{ x: [75, 50], y: [50, 50] }} transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }} />
                  <motion.circle r={2} fill="#c084fc" animate={{ x: [65, 50], y: [70, 50] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
                </svg>
              </div>
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Platform Capabilities (ML & Generative AI & NLP & Vision) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Deep Learning Models */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Machine Learning</span>
              <h3 className="text-2xl font-bold text-white">Supervised & Unsupervised Model Training</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We train custom classification and regression systems, tuning parameters to improve accuracy. Our architectures support high-volume transaction scoring, anomaly auditing, and inventory forecasts.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-indigo-400 mr-2" /> Custom classification models</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-indigo-400 mr-2" /> Multi-layered regression networks</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-indigo-400 mr-2" /> Feature correlation analysis</li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Training Loss Optimizer</h4>
              <pre className="text-[10px] text-emerald-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`model.compile(
  optimizer=Adam(learning_rate=0.001),
  loss='categorical_crossentropy',
  metrics=['accuracy']
)
history = model.fit(X_train, y_train, epochs=25)`}
              </pre>
            </div>
          </div>

          {/* Generative AI (LLMs) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-4">
              <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Generative AI</span>
              <h3 className="text-2xl font-bold text-white">Isolated Private Language Models</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build dedicated language models inside secure environments, preventing internal documentation from leaking to public networks. This allows corporate teams to summarize resources and query databases securely.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-indigo-400 mr-2" /> Isolated local language models</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-indigo-400 mr-2" /> Retrieval-augmented generation (RAG) databases</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-indigo-400 mr-2" /> Secure vector search systems</li>
              </ul>
            </div>
            
            <div className="lg:order-1 bg-slate-900 p-8 rounded-3xl border border-slate-850 space-y-4">
              <h4 className="text-white font-mono text-sm border-b border-slate-800 pb-2">Vector Search Query</h4>
              <pre className="text-[10px] text-cyan-400 font-mono overflow-x-auto p-4 bg-slate-950 rounded-xl">
{`const queryVector = await embeddings.embedQuery("security rules");
const results = await index.query({
  vector: queryVector,
  topK: 5,
  includeMetadata: true
});`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Unique Section: AI Model Comparison Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase mb-2 block">
              Architectures Matrix
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              AI Model Architecture Comparison
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Compare machine learning model types across common business use cases.
            </p>
          </div>

          <div className="overflow-x-auto border border-indigo-950/60 rounded-2xl bg-slate-950/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-indigo-950/60 text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Model Type</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Primary Use Case</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Evaluation Metric</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Deployment Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-950/60 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Transformers (LLMs)</td>
                  <td className="px-6 py-4">Private document summarization & search</td>
                  <td className="px-6 py-4">ROUGE Score / Perplexity</td>
                  <td className="px-6 py-4 text-indigo-400">ONNX Weights (Edge)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Convolutional Networks (CNN)</td>
                  <td className="px-6 py-4">Security camera scan analysis</td>
                  <td className="px-6 py-4">mAP (Mean Average Precision)</td>
                  <td className="px-6 py-4 text-indigo-400">TensorFlow Lite (Mobile)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Gradient Boosting (XGBoost)</td>
                  <td className="px-6 py-4">Financial transaction risk scoring</td>
                  <td className="px-6 py-4">F1 Score / ROC-AUC</td>
                  <td className="px-6 py-4 text-indigo-400">Pickle File (API)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Vector Search Databases</td>
                  <td className="px-6 py-4">RAG document retrieval operations</td>
                  <td className="px-6 py-4">Recall @ K / Cosine Distance</td>
                  <td className="px-6 py-4 text-indigo-400">Pinecone / pgvector (Cloud)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Unique Section: Model Training Pipeline */}
      <section id="training" className="py-24 bg-slate-950 border-t border-b border-indigo-950/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase mb-2 block">
              Training Pipeline
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Model Development & Deployment Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {trainingStages.map((stage, idx) => (
              <div key={idx} className="bg-slate-905 border border-indigo-950/80 p-6 rounded-2xl relative space-y-4">
                <div className="text-xs font-black text-indigo-800 absolute top-3 right-4 font-mono select-none tracking-widest uppercase">
                  {stage.phase}
                </div>
                <h4 className="text-sm font-bold text-white pt-4">{stage.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Value */}
      <section className="py-24 bg-slate-905">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 block">AI System Performance</span>
            <h2 className="text-3xl font-extrabold text-white">Performance Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-indigo-950/60 bg-indigo-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-indigo-400">99.2%</div>
              <h4 className="font-bold text-white text-sm">Classification Accuracy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tuned classification models minimize scoring errors during operations.
              </p>
            </div>
            
            <div className="border border-indigo-950/60 bg-indigo-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-indigo-400">&lt;85ms</div>
              <h4 className="font-bold text-white text-sm">Model Response Latency</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Optimized model weights deliver fast calculations over edge networks.
              </p>
            </div>

            <div className="border border-indigo-950/60 bg-indigo-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-indigo-400">100%</div>
              <h4 className="font-bold text-white text-sm">Company Data Isolation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Running models inside secure local clusters prevents data leaks.
              </p>
            </div>

            <div className="border border-indigo-950/60 bg-indigo-950/10 p-6 rounded-2xl space-y-3">
              <div className="text-3xl font-bold text-indigo-400">4.5x</div>
              <h4 className="font-bold text-white text-sm">Faster Document Audits</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vector search systems scan internal records to surface relevant details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQs */}
      <section className="py-24 bg-slate-950 border-t border-indigo-950/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase mb-2 block">
              Support FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Service FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} iconColor="text-indigo-400" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="bg-slate-950 py-20 border-t border-indigo-950/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build Custom Machine Learning Systems?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Discuss custom language models, classification architectures, datasets, and edge deployment options with our engineers today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
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
