// Killing Grounds
//
// made by HSDN / Kuroine

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_start = false;

	return {
		"nd-3106-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3106-1000-32061001": [
			{ type: "text", sub_type: "message", message: "Debuff (Close)", message_PT: "Bebuff perto" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_PT: "Usar Stun embreve...", delay: 2000 }
		],
		"qb-3106-1000-32061002": [
			{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_PT: "Debuff Longe" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_PT: "Usar Stun embreve...", delay: 2000 }
		],

		"s-3106-1000-106-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_PT: "Giro Atrás (Empurrão)" }],
		"s-3106-1000-108-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_PT: "Giro Atrás (Empurrão)" }],
		"s-3106-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_PT: "Salto (Derrubar)" }],
		"s-3106-1000-201-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3106-1000-202-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente AoE" }],
		"s-3106-1000-203-0": [{ type: "text", sub_type: "message", message: "Front + Wave", message_PT: "Frente AoE + Onda" }],
		"s-3106-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3106-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro(Sangrar)" }],
		"s-3106-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro(Sangrar)" }],
		"s-3106-1000-209-0": [
			{ type: "text", sub_type: "notification", message: "Stomp (Knockdown)", message_PT: "Usar Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3106-1000-210-0": [
			{ type: "text", sub_type: "notification", message: "Stomp (Knockdown)", message_PT: "Usar Stun (Derrubar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3106-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_PT: "Empurrar" }],
		"s-3106-1000-216-0": [{ type: "text", sub_type: "message", message: "Somersault", message_PT: "Salto Mortal" }],
		"s-3106-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Waves Outward", message_PT: "Ondas DENTRO" },
			{ type: "text", sub_type: "message", message: "Entrar", message_PT: "Entrar", delay: 2800 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 16, 180, 200, 5000] },
			{ type: "spawn", func: "circle", args: [false, 413, 0, 0, 10, 350, 200, 5000] }
		],
		"s-3106-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Waves Inward", message_PT: "Ondas FORA" },
			{ type: "text", sub_type: "message", message: "Sair", message_PT: "Sair", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 413, 0, 0, 16, 180, 200, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 200, 5000] }
		],
		"s-3106-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash + Jump (Knockdown)", message_PT: "Puxar + Salto (Derrubar)" }],

		"s-3106-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_PT: "Liberar" }],
		"s-3106-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_PT: "Liberar" }],
		"s-3106-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_PT: "Giro" }],
		"s-3106-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_PT: "Frente" }],
		"s-3106-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }],
		"s-3106-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_PT: "АоЕ" }]
	};
};