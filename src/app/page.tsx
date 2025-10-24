"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ChefHat, LucideList, Mail, Package, Scale, Soup, Utensils, Wheat } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Козацька Кухня"
          navItems={[
            { name: "Головна", id: "hero" },
            { name: "Борщ", id: "borsch" },
            { name: "Сало", id: "salo" },
            { name: "Вареники", id: "varenyky" },
            { name: "Контакти", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Козацька Кухня - сила, смак і душа України!"
          description="Борщ, сало та вареники — три стовпи української сили"
          tag="Традиційні рецепти"
          tagIcon={Utensils}
          imageSrc="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          buttons={[{ text: "Спробувати рецепти", href: "recipes" }]}
        />
      </div>

      <div id="borsch" data-section="borsch">
        <FeatureCardTwo
          title="Український борщ"
          description="Найвідоміша українська страва - духмяний, густий, наваристий борщ"
          tag="Рецепт"
          tagIcon={Soup}
          features={[
            {
              title: "Інгредієнти",
              description: "М'ясо, буряк, капуста, картопля, морква, цибуля, томатна паста, часник",
              icon: LucideList
            },
            {
              title: "Приготування",
              description: "Варимо бульйон, пасеруємо овочі, додаємо засмажку та спеції. Варимо до готовності.",
              icon: ChefHat
            }
          ]}
        />
      </div>

      <div id="salo" data-section="salo">
        <FeatureCardTwo
          title="Сало"
          description="Традиційний український делікатес"
          tag="Рецепт"
          tagIcon={Scale}
          features={[
            {
              title: "Підготовка",
              description: "Обираємо якісне сало, натираємо сіллю, часником та спеціями",
              icon: Scale
            },
            {
              title: "Зберігання",
              description: "Загортаємо в пергамент та зберігаємо в прохолодному місці",
              icon: Package
            }
          ]}
        />
      </div>

      <div id="varenyky" data-section="varenyky">
        <FeatureCardTwo
          title="Вареники"
          description="Улюблена страва українців з різноманітними начинками"
          tag="Рецепт"
          tagIcon={Wheat}
          features={[
            {
              title: "Тісто",
              description: "Борошно, яйця, вода, сіль - замішуємо еластичне тісто",
              icon: Wheat
            },
            {
              title: "Начинки",
              description: "Картопля з грибами, капуста, сир, вишні - обирайте до смаку",
              icon: ChefHat
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          title="Зв'яжіться з нами"
          description="Маєте питання щодо рецептів? Напишіть нам!"
          tag="Контакти"
          tagIcon={Mail}
          buttonText="Надіслати"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          copyrightText="© 2025 Козацька Кухня. Зроблено з любов'ю та салом 💛💙 Слава Україні!"
          columns={[
            {
              title: "Рецепти",
              items: [
                { label: "Борщ", href: "borsch" },
                { label: "Сало", href: "salo" },
                { label: "Вареники", href: "varenyky" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}