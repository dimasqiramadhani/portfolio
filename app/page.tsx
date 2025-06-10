"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaJs, FaHtml5, FaCss3Alt, FaGit, FaReact, FaEnvelope, FaPhone, FaArrowDown } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Image1 from "../public/1.png";
import Image2 from "../public/2.jpg";
import Image3 from "../public/3.png";
import Image4 from "../public/4.png";
import Image5 from "../public/5.png";
import Image6 from "../public/6.jpg";

import pp from "../public/pp.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-10 py-20">
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
                Membangun Solusi Digital Adaptif untuk Masa Depan
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Ahli dalam menggunakan stack{" "}
                <span className="text-black dark:text-white">MERN</span>{" "}
                (MongoDB, Express, React, Node.js) dengan integrasi AI.
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
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <Button className="rounded-sm bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"> 
                  Resume <FaArrowDown />
                </Button>
              </Link>

              <Link
                href="https://github.com/dimasqiramadhani"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="https://linkedin.com/in/dimasqiramadhani"
                target="_blank"
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
                    Maret, 2025
                  </p>
                  <p className="font-medium">Web Developer Freelance</p>
                  <p className="text-blue-600 dark:text-blue-400">Pekerja Mandiri</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Membangun dan meluncurkan website responsif untuk bisnis kecil
                menggunakan React.js (Next.js dan Redux). Mengintegrasikan API
                backend dan mengelola hosting di platform seperti Vercel dan
                Netlify. Berhasil meningkatkan kehadiran online dan keterlibatan
                pengguna klien dengan menyediakan aplikasi web yang cepat dimuat
                dan ramah SEO.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    September, 2023
                  </p>
                  <p className="font-medium">Pengabdian Masyarakat</p>
                  <p className="text-blue-600 dark:text-blue-400">Universitas Merdeka Malang</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Berpengalaman dalam pengabdian masyarakat membangun aplikasi web digital marketing untuk brand Djamoesoedirdjo menggunakan tech stack MERN (MongoDB, Express.js, React.js, Node.js). Proyek ini mengasah kemampuan full-stack saya dalam menerapkan solusi teknis untuk kebutuhan pemasaran komunitas.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Juli, 2022
                  </p>
                  <p className="font-medium">Kampus Merdeka Studi Independen x Dicoding Academy</p>
                  <p className="text-blue-600 dark:text-blue-400">Universitas Merdeka Malang</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Menyelesaikan program Kampus Merdeka Studi Independen dengan fokus pada pelatihan Front-End Web Development bersama Dicoding Academy. Selama program, saya mendalami penggunaan tools modern seperti ReactJS, Next.js, Tailwind CSS, dan TypeScript untuk membangun antarmuka pengguna yang responsif dan interaktif. Pengalaman ini membekali saya dengan keterampilan praktis dalam pengembangan web bagian depan sesuai standar industri terkini.
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
                  <p className="text-blue-600 dark:text-blue-400">
                    Universitas Merdeka Malang
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Memiliki latar belakang pendidikan Sistem Informasi, dengan pendalaman pada pengembangan web dan aplikasi. Saya terampil dalam membangun solusi digital menggunakan tools modern seperti ReactJS, Node.js, dan database (SQL/NoSQL).
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
              Proyek
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={Image1}
                    alt="project-1"
                    className="rounded-sm mb-4"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js MySQL, Drizzle
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={Image2}
                    alt="project-1"
                    className="rounded-lg mb-4"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 2</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js MySQL, Drizzle
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={Image3}
                    alt="project-1"
                    className="rounded-lg mb-4"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 3</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js MySQL, Drizzle
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={Image4}
                    alt="project-1"
                    className="rounded-lg mb-4"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 4</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js MySQL, Drizzle
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={Image5}
                    alt="project-1"
                    className="rounded-lg mb-4"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 5</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js MySQL, Drizzle
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={Image6}
                    alt="project-1"
                    className="rounded-lg mb-4"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 6</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js MySQL, Drizzle
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Kontak
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="w-5 h-5" />
                <p>dimasqiramadhani@gmail.com</p> {/* Ganti dengan email asli Anda */}
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaPhone className="w-5 h-5" />
                <p>+6282254331579</p> {/* Ganti dengan nomor telepon asli Anda */}
              </div>
              <Link
                href="https://www.linkedin.com/in/dimasqiramadhani/" // Ganti dengan URL LinkedIn Anda
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
                <p>LinkedIn</p>
              </Link>
              <Link
                href="https://github.com/dimasqiramadhani" // Ganti dengan URL GitHub Anda
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
                <p>GitHub</p>
              </Link>
            </div>
            <p className="text-gray-500 ">&copy; 2025 Dimasqi Ramadhani</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
