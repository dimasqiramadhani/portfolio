"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Image1 from "../public/1.png"
import Image2 from "../public/2.jpg"
import Image3 from "../public/3.png"
import Image4 from "../public/4.png"
import Image5 from "../public/5.png"
import Image6 from "../public/6.jpg"

import pp from "../public/pp.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={pp}
              alt="profile picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Dimasqi Ramadhani
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Web Developer & AI-Driven Solutions{" "}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Kalimantan Timur, Indonesia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ opacity: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Merancang Solusi Berskala untuk Era Digital Mendatang
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Ahli dalam menggunakan stack{" "}
                <span className="text-black dark:text-white">MERN</span> (MongoDB, Express, React, Node.js) dengan integrasi AI.
                Spesialis aplikasi web modern berskala besar dan keahlian dalam:{" "}
                <span className="text-black dark:text-white">
                  React Ecosystem, Node.js, RESTful API & AI integration
                </span>
                .
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Fokus pada pengembangan web berbasis AI dan praktik DevOps untuk
                sistem performa tinggi yang tangguh dan mudah diskalakan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ opacity: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-sm bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105 cursor-pointer">
                Resume
              </Button>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Pengalaman
            </h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July, 2024
                  </p>
                  <p className="font-medium">System Engineer</p>
                  <p className="text-blue-600 dark:text-blue-400">Company X</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Led the development of cloud-native applications using AWS
                services, implementing serverless architectures that reduced
                operational costs by 40%. Established CI/CD pipelines and
                automated deployment processes, resulting in 60% faster release
                cycles.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July, 2024
                  </p>
                  <p className="font-medium">System Engineer</p>
                  <p className="text-blue-600 dark:text-blue-400">Company X</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Led the development of cloud-native applications using AWS
                services, implementing serverless architectures that reduced
                operational costs by 40%. Established CI/CD pipelines and
                automated deployment processes, resulting in 60% faster release
                cycles.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July, 2024
                  </p>
                  <p className="font-medium">System Engineer</p>
                  <p className="text-blue-600 dark:text-blue-400">Company X</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Led the development of cloud-native applications using AWS
                services, implementing serverless architectures that reduced
                operational costs by 40%. Established CI/CD pipelines and
                automated deployment processes, resulting in 60% faster release
                cycles.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Pendidikan
            </h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    September, 2020
                  </p>
                  <p className="font-medium">S1 Sistem Informasi</p>
                  <p className="text-blue-600 dark:text-blue-400">Universitas Merdeka Malang</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400">
                spearheaded the creation of a task automation tool, reducing
                manual effort and increasing productivity across teams by 30%.
                Worked closely with team leads to identify repetitive tasks and
                implement solutions tailored to specific workflows, streamlining
                operations.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    September, 2020
                  </p>
                  <p className="font-medium">S1 Sistem Informasi</p>
                  <p className="text-blue-600 dark:text-blue-400">Universitas Merdeka Malang</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400">
                spearheaded the creation of a task automation tool, reducing
                manual effort and increasing productivity across teams by 30%.
                Worked closely with team leads to identify repetitive tasks and
                implement solutions tailored to specific workflows, streamlining
                operations.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Proyek
            </h2>

            <div className="grid grid-cols-1 md:grid-col-3 gap-3">

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image1} alt="project-1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js MySQL, Drizzle</p>
                    </div>

                    <Button variant="ghost" size="icon" className="cursor-pointer">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image2} alt="project-1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 2</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js MySQL, Drizzle</p>
                    </div>

                    <Button variant="ghost" size="icon" className="cursor-pointer">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image3} alt="project-1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 3</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js MySQL, Drizzle</p>
                    </div>

                    <Button variant="ghost" size="icon" className="cursor-pointer">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image4} alt="project-1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 4</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js MySQL, Drizzle</p>
                    </div>

                    <Button variant="ghost" size="icon" className="cursor-pointer">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image5} alt="project-1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 5</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js MySQL, Drizzle</p>
                    </div>

                    <Button variant="ghost" size="icon" className="cursor-pointer">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image6} alt="project-1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 6</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js MySQL, Drizzle</p>
                    </div>

                    <Button variant="ghost" size="icon" className="cursor-pointer">→</Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
