// Crimson Killing Grounds
//
// made by HSDN / Kuroine

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_start = false;

	return {
		"nd-3206-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3206-1000-32061001": [{ type: "text", sub_type: "message", message: "Debuff (Close)", message_PT: "Debuff (Fechar)" }],
		"qb-3206-1000-32061002": [{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_PT: "Debuff (Mais Distante)" }],

		"s-3206-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 4000 }
		],
		// "s-3206-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_PT: "Оборот (откид)", check_func: () => combo_start === true }],
		"s-3206-1000-106-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_PT: "Giro Atrás (Empurrão)" }],
		"s-3206-1000-108-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_PT: "Giro Atrás (Empurrão)" }],
		"s-3206-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_PT: "Salto (Derrubar)" }],
		"s-3206-1000-201-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3206-1000-202-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3206-1000-203-0": [{ type: "text", sub_type: "message", message: "Front + Wave", message_PT: "Frente + Onda" }],
		"s-3206-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3206-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3206-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3206-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_PT: "Pisar (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3206-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_PT: "Pisar (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3206-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_PT: "Empurrar" }],
		"s-3206-1000-216-0": [{ type: "text", sub_type: "message", message: "Somersault", message_PT: "Salto Mortal" }],
		"s-3206-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Waves Outward", message_PT: "Ondas para Fora" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Waves Inward", message_PT: "Ondas para Dentro" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 5000] }
		],
		"s-3206-1000-506-0": [{ type: "text", sub_type: "message", message: "Bait (Stun)", message_PT: "Bait (Stun)" }],
		"s-3206-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash + Jump (Knockdown)", message_PT: "Pùxar + Salto (Derrubar)" }],
		// "s-3206-1000-516-0": "s-3206-1000-508-0",
		// "s-3206-1000-517-0": "s-3206-1000-509-0",

		"s-3206-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_PT: "Liberar" }],
		"s-3206-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_PT: "Liberar" }],
		"s-3206-1000-307-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3206-1000-309-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_PT: "Ataque Frontal" }],
		"s-3206-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }],
		"s-3206-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }]
	};
};